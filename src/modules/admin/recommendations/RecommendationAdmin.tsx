import { Table } from "flowbite-react";
import { useGetRecommendations } from "./hooks/useGetRecommendations";
import { GrValidate } from "react-icons/gr";
import classNames from "classnames";
import { useValidateRecommendation } from "./hooks/useValidateRecommendations";
import { RecommendationApiType } from "../../api/types/RecommendationApiType";

const renderCorrectString = (status: boolean) =>
  status === true ? "Has been validated" : "Has not been validated";

export const RecommendationAdmin = () => {
  const { recommendations } = useGetRecommendations();
  const { mutate } = useValidateRecommendation();

  const validateReference = (id: string, data: RecommendationApiType) => () =>
    mutate({ id, data });

  return (
    <div className="mt-40 flex flex-col items-center">
      <p className="text-xl my-6">Back office, validate the recommendations</p>
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>LinkedIn Link</Table.HeadCell>
          <Table.HeadCell>Message</Table.HeadCell>
          <Table.HeadCell>Statut</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y border-gray-700">
          {recommendations?.map((recommendation) => {
            const hasBeenValidated = recommendation.statut === true;
            return (
              <Table.Row
                className={classNames("border-gray-700", {
                  "bg-green-300 text-white": hasBeenValidated,
                })}
              >
                <Table.Cell>{recommendation.name}</Table.Cell>
                <Table.Cell>
                  <a href={recommendation.linkedinProfile} target="_blank">
                    {decodeURIComponent(recommendation.linkedinProfile)}
                  </a>
                </Table.Cell>
                <Table.Cell>{recommendation.message}</Table.Cell>
                <Table.Cell
                  onClick={validateReference(recommendation.id, {
                    ...recommendation,
                    statut: hasBeenValidated ? false : true,
                  })}
                  className={classNames("flex items-center cursor-pointer", {})}
                >
                  {renderCorrectString(recommendation.statut)}
                  {!hasBeenValidated && (
                    <button className="ml-4">
                      <GrValidate />
                    </button>
                  )}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

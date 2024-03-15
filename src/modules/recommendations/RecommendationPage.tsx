import { useTranslation } from "react-i18next";
import { Datepicker, Label, Select } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import { useRef } from "react";
import { DevTool } from "@hookform/devtools";
import classNames from "classnames";
import { AuthorStatus, AuthorStatusType } from "./schemas/recommendationSchema";
import { ErrorComp } from "../common/components/errors/ErrorComp";
import { useSendRecommendation } from "./hooks/useSendRecommendation";

export type RecommendationFormData = {
  message: string;
  name: string;
  linkedinProfile: string;
  fromDate: Date;
  toDate: Date;
  companyName: string;
  authorStatus: AuthorStatusType;
};

export const RecommendationPage = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<RecommendationFormData>();

  const { mutate } = useSendRecommendation();
  const onSubmit = (formDate: RecommendationFormData) => {
    mutate(formDate);
  };

  const inputClassName = classNames(
    "rounded-[5px] mt-6 h-[36px] border-2 py-2 border-color-medium-light hover:bg-color-light-grey w-[310px] px-5",
  );

  const textareaClassName = classNames(
    "rounded-[5px] mt-6 h-[200px] border-2 py-2 border-color-medium-light hover:bg-color-light-grey w-[300px] md:min-w-[500px] px-5",
  );

  const submitInputClassName = classNames(
    "hover:cursor-pointer mt-6 px-6 py-2 bg-strong-purple text-white rounded-lg flex justify-center items-center dark:bg-dark-skill-bg dark:text-dark-skill-text",
  );

  const containerClassName = classNames(
    "md:mt-6 rounded-lg flex flex-col items-center p-6 bg-white dark:bg-dark",
  );

  return (
    <div className="h-screen flex flex-col items-center md:mt-20 mt-6">
      <h1 className="text-3xl text-center dark:text-dark-highlight">
        Leave a recommendation here
      </h1>

      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className={containerClassName}
      >
        <input
          className={inputClassName}
          placeholder="name"
          {...register("name")}
        />
        {errors.name && <ErrorComp>{errors.name.message}</ErrorComp>}
        <input
          className={inputClassName}
          placeholder="company name"
          {...register("companyName")}
        />
        {errors.companyName && (
          <ErrorComp>{errors.companyName.message}</ErrorComp>
        )}
        <input
          placeholder="Your linkedIn profile"
          className={inputClassName}
          {...register("linkedinProfile")}
        />
        {errors.linkedinProfile && (
          <ErrorComp>{errors.linkedinProfile.message}</ErrorComp>
        )}
        <Label className="text-xl my-6">Your position at the company:</Label>
        <Controller
          control={control}
          name="authorStatus"
          render={({ field: { onChange } }) => (
            <Select onChange={onChange}>
              {AuthorStatus.map((author) => (
                <option key={author}>{author}</option>
              ))}
            </Select>
          )}
        />
        {errors.toDate && <ErrorComp>{errors.toDate.message}</ErrorComp>}
        <h1 className="mt-6 text-xl dark:text-dark-highlight">
          We worked from...
        </h1>
        <div className="my-6 flex gap-4">
          <Controller
            control={control}
            name="fromDate"
            render={({ field: { onChange } }) => (
              <div className="flex flex-col">
                <Datepicker
                  maxDate={getValues("toDate")}
                  onSelectedDateChanged={onChange}
                />
                {errors.toDate && (
                  <ErrorComp>{errors.toDate.message}</ErrorComp>
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            name="toDate"
            render={({ field: { onChange } }) => (
              <div className="flex flex-col">
                <Datepicker
                  minDate={getValues("fromDate")}
                  onSelectedDateChanged={onChange}
                />
                {errors.fromDate && (
                  <ErrorComp>{errors.fromDate.message}</ErrorComp>
                )}
              </div>
            )}
          />
        </div>
        <h1 className="text-xl dark:text-dark-highlight">Leave a message :)</h1>
        <textarea
          className={textareaClassName}
          placeholder="message"
          {...register("message")}
        />
        {errors.message && <ErrorComp>{errors.message.message}</ErrorComp>}
        <button
          role="button"
          className={submitInputClassName}
          onClick={handleSubmit(onSubmit)}
        >
          {t("contactPage.submit")}
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

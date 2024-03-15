import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useSendEmail } from "./hooks/useSendEmail";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { Loader } from "../../common/components/loaders/Loader";

import { Alert } from "flowbite-react";

import { ErrorComp } from "../../common/components/errors/ErrorComp";
import { contactSchema } from "./validationSchemas/contactSchema";
import { InputText } from "../../common/components/inputs/InputText";
import { TextArea } from "../../common/components/inputs/TextArea";

type FormData = {
  message: string;
  email: string;
  name?: string;
};

export const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  const { mutate, isPending, isSuccess, error } = useSendEmail(form, t);
  const onSubmit = () => mutate();

  const submitInputClassName = classNames(
    "hover:cursor-pointer mt-6 px-6 py-2 bg-strong-purple text-white rounded-lg flex justify-center items-center dark:bg-dark-skill-bg dark:text-dark-skill-text",
  );

  const containerClassName = classNames(
    "mt-6 rounded-lg flex flex-col items-center p-6 bg-white dark:bg-dark md:w-[800px] md:shadow-strong",
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center dark:text-dark-highlight">
        {t("contactPage.title")}
      </h1>

      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className={containerClassName}
      >
        <InputText placeholder="name" {...register("name")} />
        {errors.name && <ErrorComp>{errors.name.message}</ErrorComp>}
        <InputText placeholder="email" {...register("email")} />
        {errors.email && <ErrorComp>{errors.email.message}</ErrorComp>}
        <TextArea placeholder="message" {...register("message")} />
        {errors.message && <ErrorComp>{errors.message.message}</ErrorComp>}
        {isSuccess && (
          <Alert color="success" className="mt-6">
            {t("contactPage.success")}
          </Alert>
        )}

        {error && (
          <Alert color="failure" className="mt-6">
            {error.text}
          </Alert>
        )}
        <button
          role="button"
          className={submitInputClassName}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? (
            <Loader height={20} width={20} dataTestId="contact-page-loader" />
          ) : (
            t("contactPage.submit")
          )}
        </button>
      </form>
    </div>
  );
};

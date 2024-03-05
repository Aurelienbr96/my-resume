import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useSendEmail } from "./hooks/useSendEmail";
import classNames from "classnames";
import { Loader } from "../common/components/Loader";

import { Alert } from "flowbite-react";

import useBreakpoints from "../common/hooks/useBreakPoints";
import { ErrorComp } from "../common/components/ErrorComp";

type FormData = {
  message: string;
  email: string;
  name?: string;
};

export const ContactPage = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const { isXs } = useBreakpoints();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { mutate, isPending, isSuccess } = useSendEmail(form);
  const onSubmit = () => mutate();

  const inputClassName = classNames(
    "rounded-[5px] mt-6 h-[36px] border-2 py-2 border-color-medium-light hover:bg-color-light-grey w-[310px] px-5",
  );

  const textareaClassName = classNames(
    "rounded-[5px] mt-6 h-[200px] border-2 py-2 border-color-medium-light hover:bg-color-light-grey min-w-[310px] px-5",
  );

  const submitInputClassName = classNames(
    "hover:cursor-pointer mt-6 h-[40px] w-[100px] bg-strong-purple text-white rounded-lg flex justify-center items-center",
  );

  const containerClassName = classNames(
    "mt-6 rounded-lg flex flex-col items-center p-6",
    {
      "w-[800px] shadow-lg": !isXs,
    },
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center">{t("contactPage.title")}</h1>

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
        <input
          placeholder="email"
          className={inputClassName}
          {...(register("email"), { required: true })}
        />
        {errors.email && <ErrorComp />}
        <textarea
          className={textareaClassName}
          placeholder="message"
          {...register("message", { required: true })}
        />
        {errors.message && <ErrorComp />}
        {isSuccess && (
          <Alert
            color="success"
            className="mt-6"
          >
            {t("contactPage.success")}
          </Alert>
        )}
        <button
          className={submitInputClassName}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? (
            <Loader height={20} width={20} />
          ) : (
            t("contactPage.submit")
          )}
        </button>
      </form>
    </div>
  );
};

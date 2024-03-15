import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { ErrorComp } from "../common/components/errors/ErrorComp";
import { loginSchema } from "./schemas/loginSchemas";
import { useLogin } from "./hooks/useLogin";

export type LoginFormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const { mutate, isPending } = useLogin();
  const onSubmit = (formDate: LoginFormData) => {
    mutate(formDate);
  };

  const inputClassName = classNames(
    "rounded-[5px] mt-6 h-[36px] border-2 py-2 border-color-medium-light hover:bg-color-light-grey w-[310px] px-5",
  );

  const submitInputClassName = classNames(
    "hover:cursor-pointer mt-6 px-6 py-2 bg-strong-purple text-white rounded-lg flex justify-center items-center dark:bg-dark-skill-bg dark:text-dark-skill-text",
  );

  const containerClassName = classNames(
    "mt-6 rounded-lg flex flex-col items-center p-6 bg-white dark:bg-dark md:w-[800px] md:shadow-strong",
  );

  return (
    <div className="h-screen flex flex-col items-center mt-48">
      <h1 className="text-3xl text-center dark:text-dark-highlight">
        Sign in to the back office
      </h1>

      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className={containerClassName}
      >
        <input
          className={inputClassName}
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <ErrorComp>{errors.email.message}</ErrorComp>}
        <input
          placeholder="Password"
          type="password"
          className={inputClassName}
          {...register("password")}
        />
        {errors.password && <ErrorComp>{errors.password.message}</ErrorComp>}
        <button
          role="button"
          className={submitInputClassName}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? "Loading..." : t("contactPage.submit")}
        </button>
      </form>
    </div>
  );
};

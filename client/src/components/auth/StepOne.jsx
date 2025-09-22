/* eslint-disable react/prop-types */
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import InputForm from "@/components/form/InputForm";
import InputButton from "@/components/form/InputButton";

const StepOne = ({ signUpForm, formControl }) => {
  return (
    <div className="space-y-4 w-full">
      {/* head title */}
      <div className="text-center">
        <div className="text-sm text-muted-foreground">
          Choose to sign up with{" "}
        </div>
      </div>

      {/* signup form */}
      <InputForm formik={signUpForm} formControl={formControl}>
        <InputButton title={"Signup"} formik={signUpForm} />
      </InputForm>

      {/* signup with google */}
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        Or Continue With
      </div>
      <GoogleAuth buttonTitle={"Signup with google"} />

      {/* to signin */}
      <div className="text-center text-sm text-muted-foreground">
        <span>Already have an account ? </span>
        <Link to="/signin" className="btn-secondary">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default StepOne;

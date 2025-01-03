import TextField from "../../ui/TextField";
import Loading from "../../ui/loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div>
          <TextField
            name="phoneNumber"
            value={phoneNumber}
            label="شماره موبایل"
            onChange={onChange}
          />
        </div>
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default SendOTPForm;

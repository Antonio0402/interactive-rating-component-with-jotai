import { useAtom, useSetAtom } from "jotai";
import { rateAtom, modalAtom } from "../store";

const Btn = () => {
  const setShow = useSetAtom(modalAtom);
  const [rate] = useAtom(rateAtom);
  return (
    <button
      type="button"
      className="uppercase text-btn bg-primary text-white py-[14px] rounded-full font-bold text-center hover:text-primary hover:bg-white disabled:bg-card-active disabled:cursor-not-allowed disabled:text-text-base"
      disabled={rate ? false : true}
      onClick={() => setShow(true)}
    >
      submit
    </button>
  );
};

export default Btn;

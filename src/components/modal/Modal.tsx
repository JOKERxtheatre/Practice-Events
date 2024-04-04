import { Button } from "../ui/button";

interface Props {
  children: string;
  closeModal: () => void;
  isModeModel: boolean;
}

function Modal({ children, closeModal, isModeModel }: Props) {
  return (
    <div
      className="Modal fixed top-0 left-0 w-full h-full"
      data-aos="zoom-out"
      data-aos-duration="500"
    >
      <div
        className="overlay top-0 left-0 w-full h-full fixed bg-black/20 backdrop-blur-sm -z-10"
        onClick={() => closeModal()}
      ></div>
      <div
        className="flex flex-col gap-3 p-11 max-w-lg bg-white rounded-lg m-20 mx-auto border-4 border-amber-600 z-20"
        style={{
          borderColor: isModeModel ? "yellowgreen" : "red",
        }}
      >
        {children}
        <Button
          variant={"destructive"}
          onClick={() => {
            closeModal();
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default Modal;

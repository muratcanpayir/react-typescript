//template literals
type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

//we dont want to be center-center position. it could be center. we use Exclude to fix this
type ToastType = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

function Toast({ position }: ToastType) {
  return <div>Toast notification position - {position}</div>;
}

export default Toast;

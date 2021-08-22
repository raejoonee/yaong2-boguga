import toast from 'react-hot-toast';

const makeToast = (
  id: string,
  icon: string | JSX.Element | null,
  msg: string,
) =>
  toast(
    (currentToast) => (
      <span
        role="button"
        tabIndex={0}
        onClick={() => toast.dismiss(currentToast.id)}
        onKeyPress={() => toast.dismiss(currentToast.id)}
      >
        {msg}
      </span>
    ),
    { id, icon },
  );

export default makeToast;

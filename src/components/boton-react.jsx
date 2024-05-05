import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ButtonReact()
{
    const notify = () => toast.success("Usted esta viendo está alerta");

    return(<>
        <div>
        <button onClick={notify}>Ver alerta</button>
        <ToastContainer />
      </div>
    </>);
}

export default ButtonReact;
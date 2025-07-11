import { Navigate } from 'react-router-dom';

/// Dashboard
import Home from "../../components/Dashboard/Home";
import ListCustomer from '../../components/Customer/ListCustomer';
import ListDriver from '../../components/driver/ListDriver';

const AllRoutes = (props) => {

    return [
        {
            url: "dashboard",
            component: <Home {...props} />
        },
        {
            url: "list-customers",
            component: <ListCustomer {...props} />
        },
        {
            url: "list-drivers",
            component: <ListDriver {...props} />
        },
        {
            url: "/",
            component: <Navigate to="/dashboard" replace />
        },
    ];
};

export default AllRoutes;
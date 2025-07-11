export const MenuList = [

    //Dashboard
    {
        title: 'Dashboard',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-networking" />,
        content: [
            {
                title: 'Dashboard',
                to: 'dashboard',
            },
        ],
    },

    //Customer
    {
        title: 'Customer',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-television" />,
        content: [
            {
                title: 'All Customer',
                to: 'list-customer'
            },
        ],
    },

    //Driver
    {
        title: 'Driver',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-controls-3" />,
        content: [
            {
                title: 'List Driver',
                to: 'list-driver',
            },
        ]
    },

];
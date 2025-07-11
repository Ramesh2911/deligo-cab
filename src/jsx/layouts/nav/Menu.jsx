export const MenuList = [
    {
        title: 'Dashboard',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-networking" />,
        content: [
            { title: 'Dashboard', to: 'dashboard' },
        ],
    },
    {
        title: "Customers & Drivers",
        iconStyle: <i className="fa-solid fa-users" />,
        content: [
            { title: "All Customers", to: "list-customers" },
            { title: "All Drivers", to: "list-drivers" },
            { title: "KYC Verification", to: "/admin/kyc-verification" },
            { title: "Blocked Accounts", to: "/admin/blacklist" },
        ],
    },
    {
        title: "Trips & Deliveries",
        iconStyle: <i className="fa-solid fa-motorcycle" />,
        content: [
            { title: "Ongoing Rides", to: "/admin/trips/ongoing" },
            { title: "Completed Rides", to: "/admin/trips/completed" },
            { title: "Cancelled Rides", to: "/admin/trips/cancelled" },
            { title: "Delivery History", to: "/admin/deliveries" },
        ],
    },
    {
        title: "Manual Booking",
        iconStyle: <i className="fa-solid fa-plus-square" />,
        to: "/admin/manual-booking",
    },
    {
        title: "Finance & Reports",
        iconStyle: <i className="fa-solid fa-file-invoice-dollar" />,
        content: [
            { title: "Driver Commissions", to: "/admin/finance/commissions" },
            { title: "User Payments", to: "/admin/finance/payments" },
            { title: "Revenue Reports", to: "/admin/finance/reports" },
        ],
    },
    {
        title: "Settings",
        iconStyle: <i className="fa-solid fa-cog" />,
        content: [
            { title: "Fare Configuration", to: "/admin/settings/fares" },
            { title: "Promo Codes", to: "/admin/settings/promos" },
            { title: "Push Notifications", to: "/admin/settings/notifications" },
            { title: "Legal Pages", to: "/admin/settings/legal" },
        ],
    },
    {
        title: "Location Management",
        iconStyle: <i className="fa-solid fa-map-marker-alt" />,
        content: [
            { title: "Manage Cities", to: "/admin/locations/cities" },
            { title: "Geofencing", to: "/admin/locations/geofencing" },
            { title: "Zone Pricing", to: "/admin/locations/zone-pricing" },
        ],
    },
    {
        title: "Logout",
        iconStyle: <i className="fa-solid fa-sign-out-alt" />,
        to: "/logout",
    },
];

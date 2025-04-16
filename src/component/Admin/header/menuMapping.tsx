export const menu = {
  superadmin: [
    {
      route: "/dashboard",
      label: "Dashboard",
      id: "1",
    },
    {
      id: 3,
      label: "Content",
      route: "",
      submenu: [
        {
          id: 30,
          label: "Quiz Content",
          route: "/endorsement-expert",
        },
        {
          id: 31,
          label: "Content",
          route: "/contentcreator",
        },
      ],
    },
    {
      route: "/quiz",
      label: "Quiz",
      id: "2",
    },
    {
      id: 4,
      label: "User Management",
      route: "",
      submenu: [
        {
          id: 5,
          label: "User Management",
          route: "/usermanagement",
        },
      ],
    },
    {
      route: "/filestorage",
      label: "File Storage",
      id: "6",
    },
        {
      route: "/settings",
      label: "Settings",
      id: "7",
    },
  ],
};

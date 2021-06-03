window.config = {
    path: "/",
    /** This is an array, but we'll only use the first entry for now */
    servers: [
        {
            id: "J4Care DCM4CHE",
            url: "https://test.j4care.com:8443/dcm4chee-arc/aets/DCM4CHEE/rs",
            write: true
        },
        // neagen does not work
        // {
        //     id: "Neagen neaLink",
        //     url: "https://cloud.neagen.com/ilp",
        //     write: true
        // },
    ],
    annotations: [
    ]
  };
  
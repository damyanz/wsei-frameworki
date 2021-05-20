export const workspaces = [
  {
    id: 0,
    label: "Client contract",
    slug: "client-contract",
    icon: "pencil",
    picture: "https://picsum.photos/id/954/1200/600",
  },
  {
    id: 1,
    label: "Supplier contract",
    slug: "supplier-contract",
    icon: "pencil",
    picture: "https://picsum.photos/id/622/1200/600",
  },
  {
    id: 2,
    label: "Corporate",
    slug: "corporate",
    icon: "office-building",
    picture: "https://picsum.photos/id/1048/1200/600",
  },
  {
    id: 3,
    label: "Group Norms",
    slug: "group-norms",
    icon: "color-swatch",
    picture: "https://picsum.photos/id/76/1200/600",
  },
  {
    id: 4,
    label: "Real estate contracts",
    slug: "real-estate-contracts",
    icon: "pencil",
    picture: "https://picsum.photos/id/200/300/100",
  },
];

export const platform = [
  {
    label: "Home",
    icon: "home",
    slug: "",
  },
  {
    label: "Publications",
    icon: "publications",
    slug: "publications",
  },
  {
    label: "People",
    icon: "network",
    slug: "network",
  },
  {
    label: "Entities",
    icon: "office-building",
    slug: "entities",
  },
  {
    label: "Administration",
    icon: "shield",
    slug: "shield",
  },
];

export const bannersData = [
  {
    id: "entities",
    icon: "office-building",
    title: (
      <>
        Explore your <strong>entities</strong>
      </>
    ),
    link: "/entities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo beatae quis ipsam quaerat.",
  },
  {
    id: "ownership",
    icon: "cube",
    title: (
      <>
        Structure your <strong>ownership</strong>
      </>
    ),
    link: "/ownership",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo beatae quis ipsam quaerat.",
  },
  {
    id: "calendar",
    icon: "calendar",
    title: (
      <>
        Define the <strong>calendar</strong>
      </>
    ),
    link: "/calendar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo beatae quis ipsam quaerat.",
  },
];

export const filters = [
  {
    label: "SAS",
    value: "sas",
    icon: "office-building",
    bgClassName: "bg-green-300",
  },
  {
    label: "SARL",
    value: "sarl",
    icon: "office-building",
    bgClassName: "bg-blue-300",
  },
  {
    label: "Secondary business",
    value: "2nd-business",
    icon: "office-building",
    bgClassName: "bg-yellow-500",
  },
  {
    label: "Communities",
    value: "communities",
    icon: "network",
    bgClassName: "bg-gray-300",
  },
  {
    label: "POA",
    value: "poa",
    icon: "pencil",
    bgClassName: "bg-gray-100",
  },
  {
    label: "Survey",
    value: "survey",
    icon: "document",
    bgClassName: "bg-gray-100",
  },
];

export const selectFilterOptions = [
  {
    value: "followed",
    label: "Followed",
    icon: "globe-alt",
  },
  {
    value: "my",
    label: "My",
    icon: "user",
  },
];

export const tableAData = {
  legend: ["Name", "Entity", "Location", "Expertise", "Date", "Firm"],
  records: [
    {
      fields: [
        "Operation timeout",
        "Renault company",
        "France",
        "#Tax",
        "20/01/2018",
        "Racine",
      ],
    },
    {
      fields: [
        "Op. Prometheus",
        "Renault HQ",
        "USA",
        "#M&A",
        "18/02/2019",
        "Clifford chance",
      ],
    },
    {
      fields: [
        "Op. Latandre",
        "Renault Brawden",
        "Italia",
        "#Social",
        "18/02/2019",
        "SVZ",
      ],
    },
  ],
};

export const tableBData = {
  legend: ["Name", "Entity", "Location", "Expertise", "Date"],
  records: [
    {
      fields: [
        "Operation timeout",
        "Renault company",
        "France",
        "#Tax",
        "20/01/2018",
      ],
    },
    {
      fields: ["Op. Prometheus", "Renault HQ", "USA", "#M&A", "18/02/2019"],
    },
    {
      fields: [
        "Op. Latandre",
        "Renault Brawden",
        "Italia",
        "#Social",
        "18/02/2019",
      ],
    },
  ],
};

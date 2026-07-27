export const TARGET_LOCATIONS = [
  "South London",
  "Central London",
  "North Surrey",
  "Surrey",
] as const;

type TargetLocation = (typeof TARGET_LOCATIONS)[number];
type ServiceType = "design-build" | "construction" | "interior" | "planning";

const locationTemplates = {
  "design-build": [
    "design and build company {location}",
    "residential design and build {location}",
    "design and build contractors {location}",
    "bespoke design and build {location}",
    "luxury design and build company {location}",
    "home renovation design and build {location}",
    "turnkey design and build services {location}",
  ],
  construction: [
    "construction company {location}",
    "residential builders {location}",
    "house extension builders {location}",
    "loft conversion builders {location}",
    "home renovation contractors {location}",
    "property refurbishment company {location}",
    "building contractors {location}",
    "house refurbishment specialists {location}",
  ],
  interior: [
    "interior designer {location}",
    "residential interior design services {location}",
    "luxury interior designer {location}",
    "home interior renovation {location}",
    "modern interior design company {location}",
    "bespoke interior designer {location}",
    "interior design and build {location}",
  ],
  planning: [
    "planning application services {location}",
    "planning permission consultant {location}",
    "architectural planning services {location}",
    "house extension planning permission {location}",
    "loft conversion planning application {location}",
    "residential planning consultant {location}",
    "planning drawings services {location}",
  ],
} as const;

const highIntentTemplates = {
  "design-build": [
    "near me design and build company {location}",
    "in my area design and build company {location}",
    "free consultation design and build company {location}",
    "get a quote design and build company {location}",
    "cost estimate design and build company {location}",
    "hire design and build company {location}",
    "best rated design and build company {location}",
    "local design and build company {location}",
  ],
  construction: [
    "near me construction company {location}",
    "in my area construction company {location}",
    "free consultation construction company {location}",
    "get a quote construction company {location}",
    "cost estimate construction company {location}",
    "hire construction company {location}",
    "best rated construction company {location}",
    "local construction company {location}",
    "near me house renovation company {location}",
    "in my area house renovation company {location}",
    "free consultation house renovation company {location}",
    "get a quote house renovation company {location}",
    "cost estimate house renovation company {location}",
    "hire house renovation company {location}",
    "best rated house renovation company {location}",
    "local house renovation company {location}",
  ],
  interior: [
    "near me interior designer {location}",
    "in my area interior designer {location}",
    "free consultation interior designer {location}",
    "get a quote interior designer {location}",
    "cost estimate interior designer {location}",
    "hire interior designer {location}",
    "best rated interior designer {location}",
    "local interior designer {location}",
  ],
  planning: [
    "near me planning application consultant {location}",
    "in my area planning application consultant {location}",
    "free consultation planning application consultant {location}",
    "get a quote planning application consultant {location}",
    "cost estimate planning application consultant {location}",
    "hire planning application consultant {location}",
    "best rated planning application consultant {location}",
    "local planning application consultant {location}",
  ],
} as const;

const fillTemplates = (templates: readonly string[], location: TargetLocation) =>
  templates.map((template) => template.replaceAll("{location}", location));

const unique = (values: string[]) => [...new Set(values)];

const locationFromProjectId = (projectId: string): TargetLocation => {
  const slug = projectId.toLowerCase();

  if (slug.includes("central-london") || slug.includes("chelsea")) {
    return "Central London";
  }

  if (
    slug.includes("surrey") ||
    slug.includes("leatherhead") ||
    slug.includes("cheam")
  ) {
    return "North Surrey";
  }

  if (
    slug.includes("kingston") ||
    slug.includes("sutton") ||
    slug.includes("mitcham") ||
    slug.includes("twickenham") ||
    slug.includes("bromley") ||
    slug.includes("croydon") ||
    slug.includes("dartford") ||
    slug.includes("harrow")
  ) {
    return "South London";
  }

  return "Surrey";
};

const serviceTypesFromProjectId = (projectId: string): ServiceType[] => {
  const slug = projectId.toLowerCase();
  const types: ServiceType[] = [];

  if (
    slug.includes("bathroom") ||
    slug.includes("kitchen") ||
    slug.includes("joinery") ||
    slug.includes("living-room") ||
    slug.includes("hallway") ||
    slug.includes("reception") ||
    slug.includes("cellar") ||
    slug.includes("conservatory")
  ) {
    types.push("interior");
  }

  if (
    slug.includes("garage-conversion") ||
    slug.includes("holiday-home") ||
    slug.includes("renovation") ||
    slug.includes("bed") ||
    slug.includes("flat") ||
    slug.includes("garden")
  ) {
    types.push("construction");
  }

  if (
    slug.includes("extension") ||
    slug.includes("garage-conversion") ||
    slug.includes("loft")
  ) {
    types.push("planning");
  }

  if (types.length === 0) {
    types.push("design-build");
  }

  if (!types.includes("design-build")) {
    types.push("design-build");
  }

  return unique(types) as ServiceType[];
};

export const getLocationKeywordBundle = (location: TargetLocation): string[] =>
  unique(
    [
      ...fillTemplates(locationTemplates["design-build"], location),
      ...fillTemplates(locationTemplates.construction, location),
      ...fillTemplates(locationTemplates.interior, location),
      ...fillTemplates(locationTemplates.planning, location),
    ].filter(Boolean)
  );

export const getProjectKeywords = (projectId: string, projectTitle?: string): string[] => {
  const location = locationFromProjectId(projectId);
  const serviceTypes = serviceTypesFromProjectId(projectId);
  const readableTitle = (projectTitle || projectId).replaceAll("-", " ").trim();

  const serviceKeywords = serviceTypes.flatMap((serviceType) => [
    ...fillTemplates(locationTemplates[serviceType], location),
    ...fillTemplates(highIntentTemplates[serviceType], location),
  ]);

  return unique(
    [
      ...serviceKeywords,
      `${readableTitle} ${location}`,
      `${readableTitle} design and build`,
      `${readableTitle} project`,
      `design and build company ${location}`,
    ].filter(Boolean)
  );
};

export const getPageKeywords = (page: "home" | "services" | "projects" | "contact" | "about" | "blogs") => {
  const common = [
    "design and build company",
    "residential design and build",
    "home renovation contractors",
    "interior design and build",
    "planning application services",
  ];

  if (page === "home") {
    return unique([
      ...common,
      ...TARGET_LOCATIONS.flatMap((location) => [
        `design and build company ${location}`,
        `construction company ${location}`,
        `interior designer ${location}`,
      ]),
    ]);
  }

  if (page === "services") {
    return unique(
      TARGET_LOCATIONS.flatMap((location) => [
        ...fillTemplates(locationTemplates["design-build"], location),
        ...fillTemplates(locationTemplates.construction, location),
        ...fillTemplates(locationTemplates.interior, location),
        ...fillTemplates(locationTemplates.planning, location),
      ])
    );
  }

  if (page === "projects") {
    return unique([
      "design and build projects",
      "residential refurbishment projects",
      "home renovation case studies",
      ...TARGET_LOCATIONS.map((location) => `design and build projects ${location}`),
    ]);
  }

  if (page === "contact") {
    return unique(
      TARGET_LOCATIONS.flatMap((location) => [
        `get a quote design and build company ${location}`,
        `free consultation design and build company ${location}`,
        `cost estimate construction company ${location}`,
      ])
    );
  }

  if (page === "blogs") {
    return unique([
      "interior design blog",
      "home renovation tips",
      "design and build guides",
      "London interior design blog",
      "home extension advice",
      "loft conversion guide",
      "kitchen renovation tips",
      "residential construction blog",
      ...TARGET_LOCATIONS.map((location) => `design and build blog ${location}`),
    ]);
  }

  return unique([
    "about design and build company",
    "residential design and build experts",
    "interior and construction specialists",
    ...TARGET_LOCATIONS.map((location) => `design and build company ${location}`),
  ]);
};

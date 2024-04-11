type Hello = "Hello";

type HelloWorld = `${Hello}, World!`;

type LocationFields = "name" | "description" | "squareFootage" | "areThereBugs";

type PrefixedLocationFields = `location.${LocationFields}`;

type CapitilizedLocationFields = `${Uppercase<LocationFields>}`;

type LowercasedLocationFields = `${Lowercase<LocationFields>}`;

type CapitalizedLocationFields = `${Capitalize<LocationFields>}`;

type UncapitalizedLocationFields = `${Uncapitalize<CapitalizedLocationFields>}`;

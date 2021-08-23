import React from "react";
export interface typeRoute {
    path: string;
    exact: boolean;
    component: React.LazyExoticComponent<React.FC>;
}
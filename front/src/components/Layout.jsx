// src/components/layout/Layout.jsx
import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Header />
            
            {/* This renders the active route's page */}
            <main className="pt-16">  
                {/* pt-16 ensures content doesn’t hide under fixed header */}
                <Outlet />
            </main>
        </div>
    );
}

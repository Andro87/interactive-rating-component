"use client";
import styles from "./Main.module.scss";

import { Rate, Panel } from "@/app/components";

import { useState } from "react";

export const Main = () => {
    const [rating, setRating] = useState("");
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleUserChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRating(e.target.value);
    };
    const handleIsPanelOpen = () => {
        if (rating) {
            setIsPanelOpen(true);
            setMessage(" ");
        } else {
            setMessage("Please select a rating!");
        }
    };

    return (
        <main className={`${styles.main} ${isPanelOpen && styles.main_panel} `}>
            {!isPanelOpen ? (
                <Rate
                    userChoice={rating}
                    onUserChoice={handleUserChoice}
                    onOpenPanel={handleIsPanelOpen}
                />
            ) : (
                <Panel userChoice={rating} />
            )}
            {message && <p className={styles.message}>{message}</p>}
        </main>
    );
};

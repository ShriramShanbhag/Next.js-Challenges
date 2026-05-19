import React, { Suspense } from "react";
import styles from "./layout.module.css"
import Link from "next/link";

export default function CategoryLayout ({
    children,
}: {
    children: React.ReactNode
}) {
    console.log("Rendering Layout...")
    return (
        
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Link className={styles.button} href={'/groceries/dairy'} >
                    Dairy
                </Link>
                <Link className={styles.button} href={'/groceries/produce'}>
                    Produce
                </Link>
            </div>
            <Suspense>
            {children}
            </Suspense>
        </div>
    )
}
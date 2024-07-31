import styles from "./Panel.module.scss";

import Image from "next/image";

interface Props {
    readonly userChoice: string;
}

export const Panel: React.FunctionComponent<Props> = ({ userChoice }) => {
    return (
        <section aria-label="a section to thank the user for their feedback">
            <div className={styles.illustration_container}>
                <Image
                    src="/assets/illustration-thank-you.svg"
                    alt=""
                    width={160}
                    height={100}
                />
            </div>

            <p className={styles.user_choice}>
                {`You selected ${userChoice} out of 5`}
            </p>
            <h2> Thank you!</h2>
            <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </section>
    );
};

import { RateBtn } from "../RateBtn/RateBtn";
import styles from "./Rate.module.scss";

interface Props {
    readonly userChoice: string;
    readonly onUserChoice: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly onOpenPanel: () => void;
}

export const Rate: React.FunctionComponent<Props> = ({
    userChoice,
    onUserChoice,
    onOpenPanel
}) => {
    const allRatings = [
        { id: "1", rating: "1" },
        { id: "2", rating: "2" },
        { id: "3", rating: "3" },
        { id: "4", rating: "4" },
        { id: "5", rating: "5" }
    ];

    return (
        <section aria-label="a section where the user can rate the work">
            <div className={styles.icon_container}>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                        fill="#FC7614"
                    />
                </svg>
            </div>

            <h1> How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>

            <div className={styles.choices}>
                <div className={styles.choices_container}>
                    {allRatings.map((rate, index) => {
                        return (
                            <RateBtn
                                key={index}
                                ratingId={rate.id}
                                ratingValue={rate.rating}
                                isChecked={userChoice === rate.rating}
                                onUserChoice={onUserChoice}
                            />
                        );
                    })}
                </div>

                <button
                    type="button"
                    title="submit your rating"
                    className={styles.btn_submit}
                    onClick={onOpenPanel}
                >
                    submit
                </button>
            </div>
        </section>
    );
};

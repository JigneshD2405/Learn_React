
export default function Tab({ children, button, ButtonSection = "menu" }) {
    return (
        <>
            <ButtonSection>
                {button}
            </ButtonSection>
            {children}
        </>
    )
}
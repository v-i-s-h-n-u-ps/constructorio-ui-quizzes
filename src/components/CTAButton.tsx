interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ctaText?: string;
}

function CTAButton(props: CTAButtonProps) {
  const { ctaText, disabled, ...rest } = props;
  return (
    <button
      type="button"
      className={`${disabled ? 'question-cta-button disabled' : 'question-cta-button'}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      { ctaText }
    </button>
  );
}

CTAButton.defaultProps = {
  ctaText: 'Continue',
};

export default CTAButton;

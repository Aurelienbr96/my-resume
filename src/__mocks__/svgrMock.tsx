type Props = {
  "data-testid"?: string;
  className?: string;
};

const ReactComponent = (props: Props) => (
  <div data-testid={props["data-testid"]} className={props.className} />
);

ReactComponent.defaultProps = {
  "data-testid": "svg",
  className: "custom-icon-class",
};

export default ReactComponent;

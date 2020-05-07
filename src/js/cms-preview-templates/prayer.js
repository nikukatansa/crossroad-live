import React from "react";

const ContactEntry = ({ heading, text }) => (
  <div>
    <h4 className="f4 b lh-title mb2 primary">{heading}</h4>
    <p>{text}</p>
  </div>
);

const ContactEntries = ({ data }) =>
  data && data.length > 0 ? (
    <div className="flex-ns mb3">
      {data.map(({ heading, text }) => (
        <ContactEntry heading={heading} text={text} />
      ))}
    </div>
  ) : (
    ""
  );

export default class ContactPreview extends React.Component {
  render() {
    const { entry, getAsset, widgetFor } = this.props;
    const entryContactEntries = entry.getIn(["data", "contact_entries"]);
    const contactEntries = entryContactEntries
      ? entryContactEntries.toJS()
      : [];
    return (
      <div className="ph3 bg-off-white">
        <img
          src={getAsset(entry.getIn(["data", "logo"]))}
          alt=""
          className="db w4 center pv4"
        />
        <div className="center mw6 pv3">
          {widgetFor("body")}
          <ContactEntries data={contactEntries} />
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScBzP0MwN9wAF38lm0pVwTgW4WkpvJFxTJMHv5h0Ju7Qxyqhw/viewform?embedded=true"
          width="640"
          height="809"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

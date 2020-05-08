import React from "react";

import Jumbotron from "./components/jumbotron";

export default class ContactPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return (
      <div>
        <Jumbotron
          image={image}
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "subtitle"])}
        />
        <div class="ph3 bg-off-white">
          <div className="center mw6 pv3">
            <h3 className="f3 b lh-title mb2 primary">Ask for prayer</h3>
            <p className="f6 mw-100 i">{entry.getIn(["data", "intro"])}</p>
            <form name="prayer-request">
              <input
                name="entry.122909103"
                className="w-100 mb2 f6"
                id="name_input"
                type="text"
                placeholder="Your name"
                required
              />
              <input
                name="entry.1499548866"
                className="w-100 mb2 f6"
                id="contact_input"
                type="text"
                placeholder="Please email/phone me using these details (optional)"
              />
              <textarea
                name="entry.977477598"
                className="w-100 mb2 f6"
                id="request_textarea"
                type="text"
                placeholder="Your prayer request"
                required
              ></textarea>
              <input
                className="bg-primary white b mb2"
                style="cursor:pointer"
                type="submit"
                value="Send"
              />
            </form>

            {(entry.getIn(["data", "situations"]) || []) != [] && (
              <h3 className="f3 b lh-title mb2 mt2 primary">
                Prayers for different situations
              </h3>
            )}
            {(entry.getIn(["data", "situations"]) || []).map((situation, i) => (
              <div className="" key={i}>
                <h4 className="f4 b">{situation.get("title")}</h4>
                <p className="f6 mw-100 i">{situation.get("bible")}</p>
                <p className="mw-100">{situation.get("prayer")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

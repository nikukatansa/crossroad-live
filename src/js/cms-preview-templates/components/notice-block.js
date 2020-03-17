import React from "react";

export default class NoticeBlock extends React.Component {
  render() {
    const { welcomevideo, notices } = this.props;
    return (
      <div class="bg-off-white pv4">
        <div class="ph3 mw7 center">
          <h2 class="f2 b lh-title mb2">Notices</h2>
          <div class="flex-ns">
            <div style="width:100%;">
              <div style="position: relative; padding-bottom: 56.25%; margin-bottom: 30px; height: 0; overflow: hidden; max-width:100%">
                <div style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden;">
                  <iframe
                    src={`//www.youtube.com/embed/${welcomevideo}`}
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                    allowfullscreen
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {notices.map((notice, i) => (
            <div class="" key={i}>
              <h3 class="b">{notice.get(title)}</h3>
              <p class="mw-100">{notice.get(details)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    // if (image && !image.fileObj) {
    //     image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    // }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "blurb", "heading"])}</h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">Notices</h2>
            <div className="flex-ns">
              <div style={{width: '100%'}}>
                <div style={{position: 'relative', paddingBottom: '56.25%', marginBottom: '30px', height: '0', overflow: 'hidden', maxWidth: '100%'}}>
                  <div style={{position: 'relative', paddingBottom: '56.25%', paddingTop: '30px', height: '0', overflow: 'hidden'}}>
                    <iframe
                      src={`//www.youtube.com/embed/${entry.getIn(["data", "welcomevideo"])}`}
                      style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                      allowfullscreen
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            {(entry.getIn(["data", "notices"]) || []).map((notice, i) => <div className="" key={i}>
                <h3 className="b">{notice.get("title")}</h3>
                <p className="mw-100">{notice.get("details")}</p>
              </div>)}
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "worshipintro", "heading"])}</h2>
            <p className="mb4 mw-100">{entry.getIn(["data", "worshipintro", "text"])}</p>

            <div className="flex-ns">
              <div style={{width:'100%'}}>
              {(entry.getIn(["data", "worshipvideos"]) || []).map((vid, i) => 
                <div key={i} style={{position: 'relative', paddingBottom: '56.25%', marginBottom: '30px', height: '0', overflow: 'hidden', maxWidth: '100%'}}>
                  <iframe
                  src={`//www.youtube.com/embed/${vid.get("video")}`}
                  style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                  allowfullscreen
                  frameborder="0"
                  title={`${vid.get("title")}`}
                  ></iframe>
                </div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">This week's message</h2>
            <p className="mb4 mw6">{entry.getIn(["data", "sermon", "intro"])}</p>
            <div className="flex-ns">
              <div style={{width:'100%'}}>
                <div style={{position: 'relative', paddingBottom: '56.25%', marginBottom: '30px', height: '0', overflow: 'hidden', maxWidth: '100%'}}>
                  <iframe
                    src={`//www.youtube.com/embed/${entry.getIn(["data", "sermon", "video"])}`}
                    style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                    allowfullscreen
                    frameborder="0"
                    title={`${entry.getIn(["data", "sermon", "title"])}`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "blessing", "heading"])}</h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "blessing", "text"])}</p>
          </div>
        </div>

      </div>
  }
}
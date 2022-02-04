import React, { Component } from 'react';
import Breadcrumb from './breadcrumb';

class AboutUs extends Component {
  render() {
    return (
      <>
        <Breadcrumb />
        <div className="about-wrp">
          <div className="about-org-wrp">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <p> <strong>CP PLUS - The Global Leader in Advanced Surveillance &amp; Security Solution, </strong>takes its roots from&nbsp;&nbsp;in&nbsp;Germany&nbsp;in Year&nbsp;<strong>2007</strong>, with vision and commitment to make Surveillance Security Solution&nbsp;<strong>simpler</strong>&nbsp;and&nbsp;<strong>affordable.</strong> The&nbsp;comprehensive range of products &amp; solutions are monitoring &amp; securing millions of locations across the globe in diverse geographies, from highly sensitive Defense locations, Government Buildings, Vital Infrastructures to Transportation, Hotels, Hospitals, Educational institutes to Homes, with highly satisfied customer base.</p>
                  <p> Today CP PLUS is the <strong>Youngest &amp; Fastest</strong>&nbsp;company to enter the club of&nbsp;<strong>Top 7 Security Companies</strong>&nbsp;of the world and it also has been ranked amongst&nbsp;<strong>Asia's Top 3 Security &amp; Surveillance Brands</strong>, as per Latest IHS Survey. CP PLUS success is attributed largely due to its&nbsp;<strong>strong R&amp;D</strong>,&nbsp;<strong>wide range</strong>&nbsp;and its open ear policy to&nbsp;<strong>listen to its customers</strong>, thereby delivering them, the best&nbsp;<strong>Value Proposition</strong>&amp;&nbsp;<strong>Solutions</strong>. CP PLUS products pass through strict quality control tests and carry international certifications such as&nbsp;<strong>UL, CE, FCC&nbsp;</strong>etc. Our internationally recognized&nbsp;<strong>ISO quality certifications</strong>&nbsp;assures that CP PLUS has the essential processes and systems in place to meet the most daunting &amp; demanding requirements of the Global Security Industry. CP PLUS has been constantly putting effort for establishing, implementing, maintaining and continually improving an&nbsp;<strong>information security management system</strong>&nbsp;and has been certified with ISO/IEC 27001:2013.&nbsp;Recently CP PLUS has been awarded with <em>Excellence Leadership Award</em>&nbsp; on India Video Surveillance Growth from <em>Frost &amp; Sullivan, </em>first time<em> in Security Industry.</em></p>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="about-pic"> <img src="/assets/images/about-img.jpg" /></div>
                </div>
              </div>
              <blockquote className="notice"><strong>Disclaimer:</strong> We would like to inform you that we have no connection with the UK based CP Plus, who undertakes the business of car park management, security systems and facilities management throughout the UK. Their official website is <a href="#">http://www.cp-plus.co.uk</a> </blockquote>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default AboutUs;
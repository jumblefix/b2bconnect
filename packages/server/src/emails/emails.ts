const tableStyle =
  'border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;';

const fontStyle =
  'font-family: sans-serif; font-size: 14px; vertical-align: top;';

const defaultSubject = () => 'This is an example email subject';

const defaultFooter = () => {
  const spanStyle = 'color: #999999; font-size: 12px; text-align: center;';
  const txtStyle =
    'font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; ' +
    'font-size: 12px; color: #999999; text-align: center;';
  return /*html*/ `
    <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
            <table border="0" cellpadding="0" cellspacing="0" style="${tableStyle}">
            <tr>
                  <td class="content-block" style="${txtStyle}">
                    <span class="apple-link" style="${spanStyle}">
                      Company Inc, 3 Abbey Road, San Francisco CA 94102
                    </span>
                    <br>
                    Don't like these emails?
                    <a href="http://i.imgur.com/CScmqnj.gif" style="text-decoration: underline; ${spanStyle}">
                    Unsubscribe
                    </a>.
                  </td>
            </tr>
            <tr>
                  <td class="content-block powered-by" style="${txtStyle}">
                    Powered by <a href="http://htmlemail.io" style="${spanStyle} text-decoration: none;">HTML email</a>.
                  </td>
            </tr>
        </table>
    </div>
     `;
};

export const defaultSalutation = () => /*html*/ `<p>Hi there</p>`;

const defaultSpacer = () => /*html*/ `<td style="${fontStyle}">&nbsp;</td>`;

export const renderEmail = ({
  subject = defaultSubject(),
  message = defaultMessageBody(),
  salutation = defaultSalutation(),
  footer = defaultFooter(),
}: EmailRendererProps) => {
  const emailContent = emailContentBody({
    subject,
    salutation,
    footer,
    messageBody: message,
  });
  return emailTemplate({ subject, emailContent });
};

export const paragraphStyle =
  'font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;';
let buttonStyle =
  'display: inline-block; color: #ffffff; background-color: #3498db;';
buttonStyle +=
  'border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; ';
buttonStyle +=
  'text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; ' +
  'text-transform: capitalize; border-color: #3498db;';

const defaultMessageBody = () => /*html*/ `
<p style="${paragraphStyle}">
    Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.
</p>
<table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="${tableStyle} box-sizing: border-box;">
    <tbody>
        <tr>
            <td align="left" style="${fontStyle} padding-bottom: 15px;">
                <table border="0" cellpadding="0" cellspacing="0"
                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                    <tbody>
                        <tr>
                            <td style="${fontStyle} background-color: #3498db; border-radius: 5px;
                            text-align: center;">
                                <a href="http://htmlemail.io" target="_blank" style="${buttonStyle}">
                                      Call To Action
                                 </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<p style="${paragraphStyle}">
     This is a really simple email template.
     Its sole purpose is to get the recipient to click the button with no distractions.
</p>
<p style="${paragraphStyle}">
    Good luck! Hope it works.
</p>
  `;

const emailContentBody = ({
  subject,
  salutation = 'Hi There!,',
  footer = '',
  messageBody,
}: EmailContent) => {
  return /*html*/ `
<table border="0" cellpadding="0" cellspacing="0" class="body" style="${tableStyle} background-color: #f6f6f6;">
      <tr>
      ${defaultSpacer()}
        <td class="container" style="${fontStyle} display: block; Margin: 0 auto; max-width: 680px;
        padding: 10px; width: 680px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto;
          max-width: 680px; padding: 10px;">
            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader"

            style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0;
            opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">
                ${subject}
            </span>
            <table class="main" style="${tableStyle} background: #ffffff; border-radius: 3px;">
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="${fontStyle} box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="${tableStyle}">
                    <tr>
                      <td style="${fontStyle}">
                        <p style="${paragraphStyle}">
                        ${salutation},
                        </p>
                        ${messageBody}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- START FOOTER -->
            ${footer}
            <!-- END FOOTER -->
          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        ${defaultSpacer()}
      </tr>
    </table>
 `;
};

const emailTemplate = ({ subject, emailContent }: EmailTemplate) => {
  return /*html*/ `
    <!doctype html lang="en">
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${subject}</title>
    <style>
    /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
        font-size: 16px !important;
      }
      table[class=body] .wrapper,
            table[class=body] .article {
        padding: 10px !important;
      }
      table[class=body] .content {
        padding: 0 !important;
      }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
      }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      table[class=body] .btn table {
        width: 100% !important;
      }
      table[class=body] .btn a {
        width: 100% !important;
      }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }

    /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
    }
    </style>
  </head>
  <body style="background-color: #f6f6f6;
  font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px;
  line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;">
    ${emailContent}
  </body>
</html>
    `;
};

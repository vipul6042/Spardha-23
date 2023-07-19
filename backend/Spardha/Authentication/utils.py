from django.core.mail import EmailMessage
from sendgrid.helpers.mail import (Mail,From)
from sendgrid import SendGridAPIClient
from Spardha.settings import EMAIL_HOST_USER, SENDGRID_API_KEY, SENDGRID_VERIFY_ACCOUNT_TEMP_ID, EMAIL_HOST_USER_NAME

class Util:
    @staticmethod
    def send_email(data):
        email = EmailMessage(
            subject=data["email_subject"], body=data["email_body"], to=data["to_mail"]
        )
        email.content_subtype = "html"
        email.send()

    @staticmethod
    def send_email_sendgrid(data):
        from_email = From(EMAIL_HOST_USER, EMAIL_HOST_USER_NAME)
        email = Mail(from_email, to_emails=data["to_mail"])
        email.template_id = data["template_id"]
        email.dynamic_template_data = data["dynamic_template_data"]
        # print(EMAIL_HOST_USER)
        try:
            sg = SendGridAPIClient(SENDGRID_API_KEY)
            response = sg.send(email)
            code, headers = response.status_code, response.headers
            if code != 202:
                print(f"Response code: {code}")
            # print(f"Response headers: {headers}")
        except Exception as e:
                print("Error: {0}".format(e))
        return 1
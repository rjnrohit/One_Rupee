import requests
import json

# import checksum generation utility
# You can get this utility from https://developer.paytm.com/docs/checksum/
from . import Checksum

# initialize a dictionary
paytmParams = dict()


def verify_response(my_mid, merchant_key, order_id, checksum):
    # Find your MID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
    paytmParams["MID"] = my_mid

    # Enter your order id which needs to be check status for
    paytmParams["ORDERID"] = order_id

    # Generate checksum by parameters we have in body
    # Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
    #checksum = Checksum.generate_checksum(paytmParams, merchant_key)

    # put generated checksum value here
    paytmParams["CHECKSUMHASH"] = checksum

    # prepare JSON string for request
    post_data = json.dumps(paytmParams)

    # for Staging
    url = "https://securegw-stage.paytm.in/order/status"

    # for Production
    # url = "https://securegw.paytm.in/order/status"

    response = requests.post(url, data=post_data, headers={
                             "Content-type": "application/json"}).json()
    return response

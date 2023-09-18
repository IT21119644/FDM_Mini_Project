import logging

import azure.functions as func
import prediction

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    res = prediction.predict()
    print("prediction", res)

    if(res[0] >= 0):
        return func.HttpResponse(f"final prediction: {res[0]}")
        
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )

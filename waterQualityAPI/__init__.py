import logging

import azure.functions as func
import prediction

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    req_body = req.get_json()

    pH = req_body.get('pH')
    iron = req_body.get('iron')
    nitrate = req_body.get('nitrate')
    chloride = req_body.get('chloride')
    lead = req_body.get('lead')
    zinc = req_body.get('zinc')
    color = req_body.get('color')
    turbidity = req_body.get('turbidity')
    fluoride = req_body.get('fluoride')
    copper = req_body.get('copper')
    odor = req_body.get('odor')
    sulfate = req_body.get('sulfate')
    conductivity = req_body.get('conductivity')
    chlorine = req_body.get('chlorine')
    manganese = req_body.get('manganese')
    totalDissolvedSolids = req_body.get('totalDissolvedSolids')
    source = req_body.get('source')
    waterTemp = req_body.get('waterTemp')
    airTemp = req_body.get('airTemp')

    values = [pH, iron, nitrate, chloride, lead, zinc, color, turbidity, fluoride, copper, odor, sulfate, conductivity, chlorine, manganese, totalDissolvedSolids, source, waterTemp, airTemp]

    res = prediction.predict(values)
    print("prediction", res)

    if(res[0] == 0):
        return func.HttpResponse(f"This water sample is not suitable PH")
    
    elif(res[0] == 1):
        return func.HttpResponse(f"This water sample is good PH")
        
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )

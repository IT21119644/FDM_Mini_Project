import azure.functions as func
import logging

import prediction_2

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="http_trigger_fdm_wqp")
def http_trigger_fdm_wqp(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    req_body = req.get_json()

    pH = req_body.get('pH')
    iron = req_body.get('iron')
    nitrate = req_body.get('nitrate')
    chloride = req_body.get('chloride')
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
    waterTemp = req_body.get('waterTemp')
    airTemp = req_body.get('airTemp')
    day = req_body.get('day')

    values = [pH, iron, nitrate, chloride, color, turbidity, fluoride, copper, odor, sulfate, conductivity, chlorine, manganese, totalDissolvedSolids, waterTemp, airTemp, day]

    res = prediction_2.predict(values)

    if(res[0] == 0):
        return func.HttpResponse(f"This water sample is not suitable {pH} {iron}")
    
    elif(res[0] == 1):
        return func.HttpResponse(f"This water sample is good {pH} {iron}")
        
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
    

@app.route(route="http_trigger_test", auth_level=func.AuthLevel.FUNCTION)
def http_trigger_test(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )

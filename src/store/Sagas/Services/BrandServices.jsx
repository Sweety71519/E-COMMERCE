export async function createService(action) {
    console.log("service req",action);
    var response = await fetch("http://localhost:8000/brand", {
        method: "post",
        headers: {
            "content-type": "application/json"

        },
        body: JSON.stringify(action.payload)

    })
    response= await response.json()
    return response
}

export async function updateService(action) {
    var response = await fetch("http://localhost:8000/brand/"+action.payload.id, {
        method: "put",
        headers: {
            "content-type": "application/json"

        },
        body: JSON.stringify(action.payload)

    })
    response = await response.json()
    return  response
}

export async function getService() {
    var response = await fetch("http://localhost:8000/brand", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }

    })
    response= await response.json()
    return response
}

export async function deleteService(action) {
    var response = await fetch("http://localhost:8000/brand/"+action.payload.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"

        }

    })

    response= await response.json()
    return response
}
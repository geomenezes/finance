import { postB3 } from "./Services"

export default function clientCredentialScope() {

    let body = "client_id=1df059ec-3090-4429-a229-176388b174ed&client_secret=6c20c9b8-97d3-4362-bc35-4dd0c85dbe89&grant_type=client_credentials"

    postB3("https://developers.b3.com.br:8065/dapi/oauth/token", body)
    .then(data => {
      console.log(data)
    })

}
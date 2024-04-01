// pages/api/data.js

// Amplify
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);


export default function handler(req, res) {
    console.log('API 라우트가 호출되었습니다.');

    if (req.method === 'GET') {
        // GET 요청을 처리하는 로직
        const json_response = {
            "data": [
            { "id": 1, "name": "John Doe", "email": "john@example.com" },
            { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
            ],
            "amplifyconfig":"123"
        };
        
        res.status(200).json(json_response);
    } else {
        // 다른 HTTP 메소드의 요청을 처리하지 않음
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
  
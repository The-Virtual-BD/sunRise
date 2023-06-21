import React, { useEffect } from 'react';

const CrispChat = () => {
    useEffect(() => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "27765c31-8c13-47c2-8226-1ff540e53001";

        const script = document.createElement("script");
        script.src = "https://client.crisp.chat/l.js";
        script.async = 1;
        document.head.appendChild(script);

        return () => {
            // Cleanup when component unmounts
            script.remove();
        };
    }, []);

    return null;
};

export default CrispChat;
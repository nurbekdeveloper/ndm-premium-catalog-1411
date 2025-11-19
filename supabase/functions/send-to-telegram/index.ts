import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TelegramMessage {
  type: "contact" | "order" | "cart";
  data: any;
}

const formatContactMessage = (data: any): string => {
  return `
🆕 *YANGI KONTAKT MUROJAAT*

👤 *Ism:* ${data.name}
📧 *Email:* ${data.email}
💬 *Xabar:*
${data.message}

⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}
  `.trim();
};

const formatOrderMessage = (data: any): string => {
  return `
🛒 *YANGI BUYURTMA*

👤 *Ism:* ${data.name}
📞 *Telefon:* ${data.phone}
📦 *Mahsulot:* ${data.product}
🔢 *Soni:* ${data.quantity}
${data.comment ? `💭 *Izoh:* ${data.comment}` : ''}

⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}
  `.trim();
};

const formatCartMessage = (data: any): string => {
  const itemsList = data.items.map((item: any, index: number) => 
    `${index + 1}. ${item.name} - ${item.quantity} dona`
  ).join('\n');

  return `
🛍️ *YANGI SAVATCHA BUYURTMA*

📋 *Mahsulotlar:*
${itemsList}

📊 *Jami mahsulotlar:* ${data.totalItems} dona

⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}
  `.trim();
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error("Telegram credentials not configured");
    }

    const { type, data }: TelegramMessage = await req.json();
    console.log("Received message type:", type, "data:", data);

    let message = "";
    switch (type) {
      case "contact":
        message = formatContactMessage(data);
        break;
      case "order":
        message = formatOrderMessage(data);
        break;
      case "cart":
        message = formatCartMessage(data);
        break;
      default:
        throw new Error("Invalid message type");
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const result = await response.json();
    console.log("Telegram API response:", result);

    if (!response.ok) {
      throw new Error(`Telegram API error: ${JSON.stringify(result)}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Xabar yuborildi" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error sending to Telegram:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);

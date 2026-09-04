import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Log incoming requests for API endpoints
  app.use((req, res, next) => {
    if (req.path.startsWith("/api/")) {
      console.log(`[API ${req.method}] ${req.path}`);
    }
    next();
  });

  // Secure API Route for the Atrium Live Concierge Chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("GEMINI_API_KEY is not defined. Falling back to descriptive offline messages.");
        return res.json({
          text: "Welcome to The Atrium in Stone Mountain, GA! I would be delighted to assist you with our event spaces (Grand Mainstage, Stage B Runway, Studio A, or Central Atrium). Please call Terry directly at 678-409-9635 or email terry@brantland.com for availability and tour reservations!"
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Customized system instruction to match the authentic booktheatrium.com venue context
      const systemInstruction = `You are "Aura", the elegant, professional AI concierge for The Atrium (booktheatrium.com / theatriumlive.us), Atlanta's premier multi-venue performing arts & event center in Stone Mountain, GA.

Venue Information:
- Address: 5479 Memorial Drive, Stone Mountain, GA 30083 (DeKalb County, close to I-285 and Hwy 78)
- Phone Lines: 678-409-9635 | Office: (404) 298-6545
- Booking Email: terry@brantland.com (Contact: Terry Brantley, Brantland Developments)
- Legacy: 30+ years in the entertainment industry hosting concerts, fashion shows, film productions, and celebrations.
- Parking: 500+ free private on-site parking spaces.

Core Spaces & Capabilities:
1. The Grand Mainstage: Up to 1,500 standing or 600 seated. Concert-grade acoustics, stage lighting rigs, elevated VIP mezzanine, artist suites.
2. Stage B & Fashion Runway: Up to 450 standing or 350 seated. Dedicated runway/catwalk, spotlight trusses, conventions, awards galas.
3. Studio A & Private Lounge: Up to 200 standing or 150 seated. Intimate milestones, banquets, listening sessions, private bar.
4. Central Lobby Bar & Lounge: Connects both major halls allowing simultaneous multi-event bookings with zero sound bleed. Full-service cocktail bar.
5. Film, TV & Soundstage: Drive-in equipment load-in bays, 3-phase power, high ceilings, dressing rooms with private full bathrooms.
6. Full Commercial Kitchen: Complete cooking facilities for 600+ seated banquets, external caterers welcome, multiple bar setups.

Guidelines:
- Maintain a warm, welcoming, elite, and highly knowledgeable tone.
- Keep answers concise, clear, and centered on guiding the visitor to submit an inquiry or call Terry at 678-409-9635.
- Keep responses short (under 100 words). Use spacing for readability.`;

      // Construct conversational contents representing history
      const formattedContents = [];
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          formattedContents.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }]
          });
        }
      }
      formattedContents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text || "I apologize, but I could not connect at this time. Please reach out to Terry at 678-409-9635.";
      return res.json({ text });

    } catch (error: any) {
      console.error("Gemini API error:", error);
      return res.status(500).json({ error: error?.message || "Internal Server Error" });
    }
  });

  // Client inquiry form endpoint
  app.post("/api/inquiry", async (req, res) => {
    try {
      const { name, email, phone, eventType, date, guests, message } = req.body;
      
      console.log("New Event Booking Inquiry Received:", {
        name,
        email,
        phone,
        eventType,
        date,
        guests,
        message,
        receivedAt: new Date().toISOString()
      });

      return res.json({
        success: true,
        message: `Thank you, ${name}! Your event booking inquiry has been submitted. Terry (our Event Planner) will contact you shortly at ${phone} or ${email} to discuss details and schedule a private tour of The Atrium Live!`
      });
    } catch (error: any) {
      console.error("Inquiry route error:", error);
      return res.status(500).json({ error: error?.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

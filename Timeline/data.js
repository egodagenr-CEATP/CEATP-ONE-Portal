// CEATP-I tender data. Edit mode in the page produces an updated copy of this file.
// Dates are YYYY-MM-DD. Status: "done" | "active" | "pending".
const M = () => ["Invitation for bids", "Prospective bidders", "Pre-bid meeting", "Bid submission & opening",
  "Technical evaluation", "Financial bid opening", "HLPC approval", "Award", "Contract signing"]
  .map((label, i) => ({ id: i + 1, label, date: "", status: "pending", note: "", items: [] }));
const T = (id, title) => ({
  id, title, ref: "", estCost: "", scope: "",
  committees: { TEC: [], HLPC: [] },
  validity: { tender: { original: "", extensions: [] }, security: { original: "", extensions: [] } },
  milestones: M()
});
const B = (label, note) => ({ label, date: "", note, type: "bidder" });
const set = (t, n, o) => Object.assign(t.milestones[n - 1], o);

// ---- NHKTGEP (details to be added) ----
const nh1 = T("NHKTGEP-1", "NHKTGEP Tender 1");
const nh2 = T("NHKTGEP-2", "NHKTGEP Tender 2");

// ---- SKTDP Lot A ----
const la = T("SKTDP-A", "SKTDP Lot A: Sampur – Kappalthurai 220 kV Transmission Line");
la.ref = "CEB/PR/TRPR/SKTDP/2024/ICB/LOT A (AIIB Loan No. P000921)";
la.scope = "Design, supply, construction, erection, stringing, testing and commissioning of the Sampur – Kappalthurai 220 kV transmission line on a turnkey, measure & pay basis. Single-stage two-envelope IOCT under AIIB guidelines. Completion: 730 days from Effective Contract Date. Tender document fee LKR 250,000. Eligibility: 3 similar contracts of US$10M or more in the last 10 years, and average annual turnover of at least US$10M over 5 years.";
set(la, 1, { date: "2025-08-14", status: "done", note: "Invitation for Tenders issued. Submission deadline 09-10-2025." });
set(la, 2, { status: "done", note: "Purchasers of tender documents not yet entered." });
set(la, 3, { date: "2025-09-03", status: "done", note: "Office of the Project Manager (CEATP-I), CEB, 3rd Floor, GOBA Building, 65/1 Sir Chittampalam A Gardiner Mawatha, Colombo 02." });
la.milestones[2].items.push({ label: "Site visit (transmission line)", date: "2025-09-04", note: "" });
set(la, 4, { date: "2025-10-22", status: "done", note: "Original deadline 09-10-2025 was extended (minute 07 says by two weeks); closing and technical opening held 22-10-2025 with seven bidders. Price tenders kept under the custody of the Bid Opening Committee. Delivered to Additional General Manager (Projects), 4th Floor, Landmark Building, 385 Galle Road, Colombo 00300." });
la.milestones[3].items.push(
  { label: "Original submission deadline", date: "2025-10-09", note: "Per Invitation for Tenders dated 14-08-2025, 10:00 a.m." },
  { label: "Closing date extended (two weeks per minute 07)", date: "", newDate: "2025-10-22", note: "Extension notice not entered. Closing and technical opening held 22-10-2025." },
  B("RSIPL – HBCL Joint Venture (R.S. Infraprojects Pvt. Ltd., India; HanBaek Co., Ltd., Korea) - EXCLUDED, declined validity extension", "Mr. Sumeet Sharma, H-70, Lane W-10, Sainik Farms, New Delhi 110062, India"),
  B("TBEA Co. Ltd", "Mr. Wei Wenkui, Chief Representative, Sri Lanka Office; No. 189, South Beijing Road, Changji, Xinjiang, China"),
  B("Shanghai Electric Power Transmission & Distribution Engineering Co., Ltd. (SPTDE), China (contact Mr. Chen Zhijie; confirmed by 14-04-2026 validity letter)", "Room 606, No. 212 Jiangning Road, Jing'an District, Shanghai, China"),
  B("KEC International Limited, India (contact at RPG House, Mr. Kartar Singh; confirmed by 14-04-2026 validity letter)", "Mr. Kartar Singh, Senior Manager, Sales and Tendering; RPG House, 463 Dr. Annie Besant Road, Worli, Mumbai 400030, India"),
  B("Ceylex Engineering (Pvt) Ltd, Sri Lanka (contact Mr. L. N. S. Perera; confirmed by 14-04-2026 validity letter)", "Chief Executive Officer; No. 69/1, Ward Place, Colombo 07, Sri Lanka"),
  B("Prakash Electrical Engineering Corporation, India (contact Mr. K. D. A. S. Milinda; confirmed by 14-04-2026 validity letter)", "Plot No. A-28/1, Near Mary Matha School, M.I.D.C. Kherdi, TAL-Chiplun, Pin 415605, Dist-Ratnagiri, India"),
  B("Transrail Lighting Limited, India (contact Mr. Amol Wankhede; confirmed by 14-04-2026 validity letter)", "501, A, B, C, E Fortune 2000, Block-G, Bandra Kurla Complex, Mumbai, India"));
set(la, 5, { date: "2026-10-08", status: "done", note: "All bidders informed by letter Ref CEB/CEATP-I/SKTDP/TE/10C/ dated 08 Oct 2026 that their technical tender is substantially responsive." });
set(la, 6, { date: "2026-10-15", status: "active", note: "For the six remaining bidders (RSIPL-HBCL JV excluded). Second public opening, 10:00 a.m. (Sri Lanka time), Office of the Chief Technical Officer, NTNSP, 4th Floor, Landmark Building, 385 Galle Road, Colombo 00300." });

// ---- SKTDP Lot A: SHLPC/HLPC records ----
la.estCost = "USD 12.83 million (LKR 3,819 million at USD 1 = LKR 297.65)";
la.scope += " Bid validity 180 days; bid security validity 208 days; bid security LKR 65 million (revised from LKR 45 million on AIIB's advice, about 1.5% of the estimate)." + " Technical description: 220 kV double-circuit, three-phase line, ACSR/AW Zebra single conductor per phase with two OPGW, about 38 km from Kappalthurai 220(132)/33 kV GSS to the proposed Sampur Collector 220(132)/33 kV GSS.";
la.milestones[0].items.push(
  { label: "TEC submitted draft bidding documents to SHLPC", date: "2025-03-20", note: "SHLPC approved the bidding document subject to amendments and an explanatory note on section 35.2; bids to be called after AIIB and Ministry of Finance concurrence for the loan." },
  { label: "BEC Chairman's letter to SHLPC", date: "2025-05-23", note: "Following the SHLPC decision of 20-03-2025." },
  { label: "SHLPC meeting: revised estimate", date: "2025-06-18", note: "SHLPC directed submission of the revised estimate for approval with justification." },
  { label: "BEC report", date: "2025-07-17", note: "Highlighted the need for clarifications from tenderers for uniformity. Bidding documents and paper advertisement then approved (date not entered)." });
la.milestones[4].items.push(
  { label: "BEC report (validity extension)", date: "2026-03-31", note: "Technical evaluation in final stage; remaining evaluation and approval stages expected to exceed current validity. Recommended a 3-month extension." },
  { label: "SHLPC meeting 07: validity extension decision", date: "2026-04-10", note: "Bid validity to 20-07-2026 and bid security to 17-08-2026 (3 months). All five SHLPC members agreed (yes, signed). Minute forwarded by Ministry of Energy letter PE/TEN/SHLPC/SC/2024/08 (date digit unclear), received at NTNSP 29 May 2026." });
la.milestones[4].items.push(
  { label: "Beneficiary change notified to bidders", date: "2026-03-06", note: "Tender security to name CEO, NTNSP, under Sri Lanka Electricity Act No. 36 of 2024." },
  { label: "Validity extension letters sent to all 7 bidders", date: "2026-04-14", note: "Ref CEB/CEATP-I/SKTDP/TE/11C, signed by Eng. R.C.P. Rajapaksha, Project Manager (CEATP-I). Tender validity 20-04-2026 to 20-07-2026 (91 days); security to 17-08-2026. Sent to Mr. Chen Zhijie (SPTDE), Mr. Kartar Singh (KEC International), Mr. Sumeet Sharma (RSIPL-HBCL JV), Mr. L. N. S. Perera (Ceylex), Mr. K. D. A. S. Milinda (Prakash), Mr. Amol Wankhede (Transrail), Mr. Wei Wenkui (TBEA)." });
la.milestones[4].items.push(
  { label: "Third extension of validity letter sent to all bidders", date: "2026-10-07", note: "Tender validity to 20-01-2027; security to 17-02-2027. Consent by email due 20-10-2026; bank guarantee amendment due 09-11-2026, 10:00 a.m. Signed by Eng. R.C.P. Rajapaksha, Project Manager (CEATP-I). HLPC approval by circulation on 07-10-2026 (BEC report 02-10-2026)." });
la.milestones[6].items.push(
  { label: "HLPC for Ministry of Energy appointed", date: "2026-05-07", note: "DPF letters PFD/PMD/App/Energy/2025/01/02 dated 07-05-2026 and PFD/PMD/Energy/Gen/2026/01/02 dated 08-05-2026, per National Procurement Commission Circular No. 01/2026 dated 02-02-2026. The 08-05-2026 letter names Lot A and Lot B. Ministry letter PE/TEN/SHLPC/SC/2024/08 dated 11-05-2026 informed NTNSP." },
  { label: "HLPC Chairperson replaced", date: "2026-05-26", note: "Ms. W M D T Wickramasinghe relieved at her request (email 22-05-2026, workload); Mr. K M G S Nalaka Kaluwewe appointed Chairman. DPF letter PFD/PMD/App/Energy/Gen/2026/01/02 dated 26-05-2026; Ministry letter PE/TEN/SHLPC/SC/2024/08 dated 27-05-2026 to CEO, NTNSP." });
la.validity.tender = { original: "2026-04-20", extensions: [
  { issued: "2026-04-14", newExpiry: "2026-07-20", ref: "CEB/CEATP-I/SKTDP/TE/11C", reason: "91 days (20-04-2026 to 20-07-2026) to complete evaluation and approval; SHLPC decision (minute 07, 10-04-2026; the NTNSP memo of 21-09-2026 calls it HLPC approval) and AIIB no objection. Letters to all 7 bidders. Written consent due by email 20-04-2026, 3:00 p.m." },
  { issued: "2026-07-17", newExpiry: "2026-10-20", ref: "CEB/CEATP-I/SKTDP/TE/11C (second extension)", reason: "Second extension, 3 months (20-07-2026 to 20-10-2026). HLPC decision 16-07-2026 (Ministry letter PE/TEN/SHLPC/SC/2024/08/Lot A) and AIIB no objection. Consent due by email 20-07-2026. RSIPL-HBCL JV declined (19-08-2026)." },
  { issued: "2026-10-07", newExpiry: "2027-01-20", ref: "CEB/CEATP-I/SKTDP/TE/11C (third extension)", reason: "Third extension, 3 months (20-10-2026 to 20-01-2027), to complete evaluation and approval; HLPC approval (by circulation 07-10-2026, BEC report 02-10-2026) and AIIB no objection. Letters to all bidders. Written consent due by email 20-10-2026." }] };
la.validity.security = { original: "2026-05-18", extensions: [
  { issued: "2026-04-14", newExpiry: "2026-08-17", ref: "CEB/CEATP-I/SKTDP/TE/11C", reason: "28-day buffer beyond extended tender validity. Original amendment due 30-04-2026, 10:00 a.m.; beneficiary to be CEO, NTNSP, P.O. Box 540, Colombo 02. Non-compliance: tender not considered further." },
  { issued: "2026-07-17", newExpiry: "2026-11-15", ref: "CEB/CEATP-I/SKTDP/TE/11C (second extension)", reason: "Extended to 15-11-2026 (the letter cites the 28-day buffer; 28 days after 20-10-2026 would be 17-11-2026). Bank guarantee amendment due 10-08-2026, 10:00 a.m.; beneficiary CEO, NTNSP." },
  { issued: "2026-10-07", newExpiry: "2027-02-17", ref: "CEB/CEATP-I/SKTDP/TE/11C (third extension)", reason: "28-day buffer beyond extended tender validity. Original bank guarantee amendment due 09-11-2026, 10:00 a.m.; beneficiary CEO, NTNSP, P.O. Box 540, Colombo 02. Second security extension not yet entered." }] };
la.committees.SHLPC = [
  { name: "Mr. K M G S N Kaluwewe", role: "Chairman (Secretary, Ministry of Education, Higher Education and Vocational Education)", appointed: "", ref: "Present at SHLPC meeting 07 (10-04-2026); agreed yes, signed", file: "" },
  { name: "Prof. K T M Udayanga Hemapala", role: "Member (Secretary, Ministry of Energy)", appointed: "", ref: "Present at SHLPC meeting 07; agreed yes, signed", file: "" },
  { name: "Eng. N S Wettasinghe", role: "Member (CEO, NTNSP Pvt Ltd)", appointed: "", ref: "Present at SHLPC meeting 07; agreed yes, signed", file: "" },
  { name: "Mr. S M Piyatissa", role: "Member (Secretary, Ministry of Labour)", appointed: "", ref: "Present at SHLPC meeting 07; agreed yes, signed", file: "" },
  { name: "Ms. S. Ajitha Batagoda", role: "Member (Additional Director General, Public Debt Management)", appointed: "", ref: "Present at SHLPC meeting 07; agreed yes, signed", file: "" }];
la.committees.HLPC = [
  { name: "Mr. K M G S Nalaka Kaluwewe", role: "Chairman (Secretary, Ministry of Education, Higher Education and Vocational Education)", appointed: "2026-05-26", ref: "DPF letter PFD/PMD/App/Energy/Gen/2026/01/02 dated 26-05-2026, in place of Ms. W M D T Wickramasinghe", file: "" },
  { name: "Ms. W M D T Wickramasinghe", role: "Chairperson until replaced (Secretary, Ministry of Women and Child Affairs)", appointed: "2026-05-07", ref: "DPF letters PFD/PMD/App/Energy/2025/01/02 dated 07-05-2026 and PFD/PMD/Energy/Gen/2026/01/02 dated 08-05-2026; relieved 26-05-2026", file: "" },
  { name: "Mr. G M R D Aponsu", role: "Member (Secretary, Ministry of Energy)", appointed: "2026-05-07", ref: "DPF letters dated 07-05-2026 and 08-05-2026", file: "" },
  { name: "Ms. L K A S Gunasekara", role: "Member (Additional Director General, Comptroller General's Office)", appointed: "2026-05-07", ref: "DPF letters dated 07-05-2026 and 08-05-2026", file: "" }];

la.milestones[0].items.push(
  { label: "TEC report tabled", date: "2025-03-06", ref: "CEB/AGM(P)/2024/IOCT/SKTDP/Lot A", note: "TEC report on the draft bidding document." },
  { label: "SHLPC meeting 01: draft bidding document", date: "2025-03-20", note: "Estimated cost USD 12.83 million; bid security LKR 45 million raised to LKR 65 million (about 1.5%) on AIIB's advice; required cash cut from USD 3.0 million to USD 2.0 million; mandatory field visit removed from the document (to be specified at the pre-bid meeting). Approved with amendments and an explanatory note on sec 35.2; bids to be called after AIIB and Ministry of Finance loan confirmation. SHLPC present: Mr. K M G S N Kaluwewe (Chairman), Prof. K T M Udayanga Hemapala, Mr. S M Piyatissa, Eng. W Edussuriya, Ms. S. Ajitha Batagoda. BEC present: Eng. A Thilakarathne, Mr. D Nallaperuma, Eng. S W Kumarawadu, Mrs. M G G K Jayawardhana." });
la.milestones[4].items.push(
  { label: "Technical result notified to responsive bidders", date: "2026-10-08", ref: "CEB/CEATP-I/SKTDP/TE/10C/", type: "document", note: "Financial tender opening on 15-10-2026, 10:00 a.m." },
  { label: "RSIPL-HBCL JV declined validity extension", date: "2026-08-19", ref: "RSIPL/NTNSP/SKTDP/LOT-A/2026-27/Return BG", type: "document", note: "Signed by Mr. Sumeet Sharma, Authorized Signatory. Cited volatile market conditions; asked for early release of its bank guarantee." },
  { label: "NTNSP memorandum to HLPC on RSIPL-HBCL status", date: "2026-09-21", ref: "NTNSP/CEATP-I/SKTDP/TE/HLPC/2026/01", type: "document", note: "Records exclusion under ITT 19.2, ITT 20.5 and NPG 2024 Section 7.5(b); no forfeiture (ITT 20.7); six technically qualified bidders remain valid to 20-10-2026, security to 15-11-2026." },
  { label: "RSIPL-HBCL JV notified non-responsive", date: "2026-10-08", ref: "CEB/CEATP-I/SKTDP/TE/12C/007", type: "document", note: "Non-extension of validity (ITT 19.2, 26.10; NPG 2024 Section 7.5(b)). Financial envelope kept unopened until after contract signing." });
la.milestones[4].items.push({ label: "BEC report (third extension)", date: "2026-10-02", ref: "CEB/PR/TRPR/SKTDP/2024/ICB/Lot A", type: "document", note: "Basis for the HLPC decision of 07-10-2026." });
la.milestones[6].items.push({ label: "HLPC decision: third extension", date: "2026-10-07", ref: "PE/TEN/SHLPC/SC/2024/08/Lot A", type: "document", note: "By circulation. Bid validity to 20-01-2027 and bid security to 17-02-2027 (printed as 17.02.2026, evidently 2027). Letter signed by Mr. G M R D Aponsu, Secretary (Acting), received at NTNSP 8 Oct 2026." });
la.milestones[6].items.push({ label: "HLPC decision: second extension", date: "2026-07-16", ref: "PE/TEN/SHLPC/SC/2024/08/Lot A", type: "document", note: "Bid validity to 20-10-2026 and bid security to 15-11-2026 (each 3 months). Letter signed by Mr. G M R D Aponsu, Secretary (Acting), Ministry of Energy." });

// ---- SKTDP Lot B ----
const lb = T("SKTDP-B", "SKTDP Lot B: Sampur Solar Collector 220(132)/33 kV and Kappalthurai Grid Substations");
lb.ref = "CEB/PR/TRPR/SKTDP/2024/ICB/LOT B (AIIB Loan No. P000921)";
lb.scope = "Design, supply, installation, testing and commissioning of the Sampur Solar Collector 220(132)/33 kV grid substation and augmentation of the Kappalthurai 220(132)/33 kV grid substation on a turnkey, lump sum basis. Single-stage two-envelope IOCT under AIIB guidelines. Completion: 730 days from Effective Contract Date. Tender document fee LKR 250,000. Eligibility: 3 similar contracts of US$10M or more in the last 10 years, and average annual turnover of at least US$10M over 5 years.";
set(lb, 1, { date: "2025-09-04", status: "done", note: "Invitation for Tenders issued. Submission deadline 30-10-2025." });
lb.milestones[0].items.push(
  { label: "TEC appointed by Director General, Dept. of Public Finance", date: "2024-05-28", note: "DPF letter PFD/PMD/App/P&E/2024/01/08 to the Secretary, Ministry of Power and Energy, to assist the SCAPC (see TEC members). Ministry letter PE/TEN/CANC/SC/2024/08 dated 29-05-2024 forwarded it to the General Manager, CEB." },
  { label: "SHLPC approved bidding documents and draft advertisement", date: "2025-08-05", note: "Subject to AIIB comments and Advance Procurement Clearance; award only on written funding assurance from AIIB and Ministry of Finance. Earlier BEC report 04-06-2025." },
  { label: "Revised bidding documents approved", date: "2025-08-25", note: "BEC report 25-08-2025 incorporating AIIB comments; SHLPC approved after AIIB formal concurrence (date not entered)." });
set(lb, 2, { status: "done", note: "Purchasers of tender documents not yet entered." });
set(lb, 3, { date: "2025-09-24", status: "done", note: "10:00 hrs, Office of the Project Manager (CEATP-I), CEB, 3rd Floor, GOBA Building, 65/1 Sir Chittampalam A Gardiner Mawatha, Colombo 02." });
lb.milestones[2].items.push({ label: "Site visit (proposed grid substation lands)", date: "2025-09-25", note: "" });
lb.milestones[2].items.push(
  { label: "Pre-bid meeting minutes issued", date: "2025-09-16", note: "CHECK: this date is before the pre-tender meeting held on 24-09-2025." },
  { label: "Clarification 1", date: "2025-10-17", note: "" },
  { label: "Clarification 2", date: "2025-10-21", note: "" },
  { label: "Clarification 3", date: "2025-10-23", note: "" },
  { label: "Clarification 4", date: "2025-10-24", note: "" },
  { label: "Clarification 5", date: "2025-10-27", note: "" },
  { label: "Clarification 6", date: "2025-10-28", note: "" },
  { label: "Clarification 7", date: "2025-11-11", note: "" },
  { label: "Clarification 8", date: "2025-11-14", note: "" });
set(lb, 4, { date: "2025-11-19", status: "done", note: "Original deadline 30-10-2025 extended by 3 weeks to 19-11-2025, 10:00 a.m., same location (Daily News notice, 2025-10-29). Delivered to Additional General Manager (Projects), 4th Floor, Landmark Building, 385 Galle Road, Colombo 00300." });
lb.milestones[3].items.push(
  { label: "Original submission deadline", date: "2025-10-30", note: "Per Invitation for Tenders dated 04-09-2025, 10:00 hrs." },
  { label: "BEC report: bidders asked for more time", date: "2025-10-16", type: "document", note: "Several prospective tenderers formally requested additional time." },
  { label: "SHLPC decision to extend bid closing by 3 weeks (Addendum No. 01)", date: "", note: "Based on bidders' requests and BEC report 16-10-2025; subject to AIIB concurrence. CHECK: the minutes say the original closing date of 30-10-2025 was revised to 22-10-2025, with the first clarification round on 17-10-2025." },
  { label: "Submission deadline extended by 3 weeks", date: "2025-10-29", newDate: "2025-11-19", note: "Published in Daily News. New deadline 19-11-2025, 10:00 a.m., same location." },
  { label: "Opening rescheduled: letter to Standing Bid Opening Committee", date: "2025-11-13", newDate: "2025-11-19", note: "Ref CEB/CEATP1/SKTDP/11D, to Mr. K. S. S. Kumar, DGM (C&PC), Chairman, Standing Bid Opening Committee (Projects Division). Opening at 10:00 a.m. on 2025-11-19; addendum in Daily News 2025-10-29 attached." },
  B("TBEA Co. Ltd", "Mr. Wei Wenkui, Chief Representative, Sri Lanka Office; No. 189, South Beijing Road, Changji, Xinjiang, China"),
  B("Yantai Dongfang Wisdom Electric Co., Ltd (JV WISDOM-CHINT)", "Mr. Wu Chao; No. 6 Jindu Road, Laishan District, Yantai City, Shandong Province, China"),
  B("Shandong Taikai Power Engineering Co., Ltd", "Mr. Chen Yongfa, Commercial Manager; South High-tech Industrial Development Zone, Tai'an City, Shandong Province, China"),
  B("CCCE-ETERN Joint Venture", "Mr. Zheng Yanchao, Authorized Representative; North of Luxu Section, 74K of G318, Lili Town, Wujiang District, Jiangsu Province, China"),
  B("JV Ceylex Engineering (Pvt) Ltd (Sri Lanka) with Xingneng Electric Power Construction Co., Ltd. (China)", "Mr. L. N. S. Perera, Chief Executive Officer; No. 69/1, Ward Place, Colombo 07, Sri Lanka"),
  B("CMC-KE JV", "Mr. Zhang Xiaofan, Chief Representative; No. 4, Col T.G. Jayawardena Mawatha, Colombo 03, Sri Lanka"));
set(lb, 5, { date: "2026-08-05", status: "done", note: "Letter NTNSP/PM/CEATP-I/SKTDP/LOT B/FIN-OPEN dated 5 Aug 2026: technical tenders substantially responsive; bidders invited to the financial opening." });
lb.milestones[4].items.push(
  { label: "SHLPC approved calling written clarifications from all bidders", date: "2026-02-18", note: "Tender-specific clarifications needed during technical evaluation." },
  { label: "BEC status when validity extension was sought", date: "2026-04-28", note: "Final stages of technical evaluation; shortage of technical staff; CEB restructuring into successor companies including NTNSP started during the validity period." },
  { label: "Beneficiary change notified to bidders", date: "2026-03-06", note: "Tender security to name CEO, NTNSP, under Sri Lanka Electricity Act No. 36 of 2024." },
  { label: "PCA 3 registration validity", date: "2026-09-03", note: "Letter CEB/CEATP-I/SKTDP/TE/11D asked all bidders to extend/renew their PCA 3 registration certificate before the existing one expires." });
set(lb, 6, { date: "2026-08-13", status: "done", note: "10:00 a.m., Office of the Chief Technology Officer (Projects), 4th Floor, Landmark Building, 385 Galle Road, Colombo 00300. Prices read out: not yet entered. BEC then began detailed financial and combined technical/financial evaluation." });
lb.milestones[6].items.push({ label: "HLPC decision: extend validity (BEC report 28-04-2026)", date: "2026-05-11", note: "Bid validity to 18-08-2026 and bid security to 15-09-2026. Chairman and one member agreed (yes, signed); third member's agree box and signature blank. SHLPC meeting No. 05, by circulation dated 11-05-2026." });
lb.milestones[6].items.push({ label: "Ministry of Energy forwarded minute 05", date: "2026-05-29", note: "Letter PE/TEN/SHLPC/SC/2024/08 to CEO, NTNSP, signed by U L Jayasundara, Senior Assistant Secretary (Procurement). Received at NTNSP 2-3 Jun 2026; passed to PD/PM (CEATP-I) on 8 Jun 2026." });
set(lb, 7, { note: "Pending: combined evaluation report, AIIB concurrence, Cabinet approval and the standstill period." });
lb.scope += " Tender security: USD 200,000 (or LKR 60,000,000) as an unconditional on-demand bank guarantee or bank draft in LKR; beneficiary: Chief Executive Officer, NTNSP.";
lb.estCost = "USD 11.14 million (LKR 3,315.41 million at USD 1 = LKR 297.65)";
lb.scope += " Sampur substation: 63 MVA, to evacuate energy from the 50 MW Sampur Solar Power Plant Phase I. Funding: AIIB and GoSL. Bid validity 180 days; bid security validity 208 days.";
lb.committees.BEC = [
  { name: "Eng. A Thilakarathne", role: "Chairman (PD, GPDEEIIP Tr.ii)", appointed: "", ref: "Per SHLPC minute 05", file: "" },
  { name: "Mrs. P K Sanjeewanie", role: "Member (Director (Development), Ministry of Energy)", appointed: "", ref: "Per SHLPC minute 05", file: "" },
  { name: "Mr. R A D R Ranasinghe", role: "Member (Director, Department of Management Service)", appointed: "", ref: "Per SHLPC minute 05", file: "" },
  { name: "Eng. (Mrs.) W S N Perera", role: "Member (PM, PSRSP PII P2-OU3)", appointed: "", ref: "Per SHLPC minute 05", file: "" },
  { name: "Eng. (Mr.) P L S Bhasura", role: "Member (EE, Tr. Designs - Grid Substations)", appointed: "", ref: "Per SHLPC minute 05", file: "" },
  { name: "Eng. U K S De Silva", role: "Member (Civil Engineer, SKDTP)", appointed: "", ref: "Per SHLPC minute 05", file: "" },
  { name: "Eng. W D J W Kumara", role: "Member (CE, Transmission Designs - Transmission Line)", appointed: "", ref: "Per SHLPC minute 05", file: "" },
  { name: "Mrs. P C Munasinghe", role: "Member (Director (Finance))", appointed: "", ref: "Per SHLPC minute 05", file: "" }];
lb.validity.tender = { original: "2026-05-18", extensions: [
  { issued: "2026-05-15", newExpiry: "2026-08-18", ref: "CEB/CEATP-I/SKTDP/TE/11D/06", reason: "Extended 3 months to complete evaluation and approval. BEC report dated 28-04-2026; HLPC approved; SHLPC approval and AIIB no objection per letter. Bidder consent due 18 May 2026." },
  { issued: "2026-08-14", newExpiry: "2026-11-18", ref: "CEB/CEATP-I/SKTDP/TE/11D/EOT-02", reason: "Second extension, 92 days; HLPC approval and AIIB no objection. AIIB concurrence, Cabinet approval and standstill will exceed prior validity. Consent due 18 Aug 2026." }] };
lb.validity.security = { original: "", extensions: [
  { issued: "2026-05-15", newExpiry: "2026-09-15", ref: "CEB/CEATP-I/SKTDP/TE/11D/06", reason: "28-day buffer beyond extended tender validity; beneficiary to be CEO, NTNSP." },
  { issued: "2026-08-14", newExpiry: "2026-12-15", ref: "CEB/CEATP-I/SKTDP/TE/11D/EOT-02", reason: "28-day cushion; value USD 200,000 or LKR 60,000,000; beneficiary CEO, NTNSP; non-compliant tender rejected." }] };


// ---- TEC and SCAPC: same for SKTDP Lot A and Lot B ----
const LD = "DPF letter PFD/PMD/App/P&E/2024/01/08 dated 28-05-2024";
const tecList = [
  { name: "Mr. Anuruddha Thilakarathne", role: "Chairman (Project Director, GPDEEIIP Tr.II, CEB)", appointed: "2024-05-28", ref: LD, file: "" },
  { name: "Mr. R A D R Ranasinghe", role: "Member, Treasury representative (Director, Department of Management Services)", appointed: "2024-05-28", ref: LD, file: "" },
  { name: "Mr. D M U Weerawardana", role: "Member, Ministry representative (Deputy Director (Planning), Ministry of Power and Energy). REPLACED by Mrs. P K Sanjeewanie", appointed: "2024-05-28", ref: LD + "; replaced per DPF letter PFD/PMD/App/Energy/2024/01/08 dated 11-07-2025", file: "" },
  { name: "Mrs. P K Sanjeewanie", role: "Member, in place of Mr. D M U Weerawardana (Director (Development), Ministry of Energy)", appointed: "2025-07-11", ref: "DPF letter PFD/PMD/App/Energy/2024/01/08 dated 11-07-2025; Ministry of Energy letter PE/TEN/SCAPC/SC/2024/08 dated 16-07-2025", file: "" },
  { name: "Mrs. W S N Perera", role: "Member (Project Manager, PSRSP PII P2-OU3, CEB)", appointed: "2024-05-28", ref: LD, file: "" },
  { name: "Mr. P L S Bhasura", role: "Member (Electrical Engineer, Transmission Designs - Grid Substations, CEB)", appointed: "2024-05-28", ref: LD, file: "" },
  { name: "Mr. U K S De Silva", role: "Member (Civil Engineer, SKTDP, CEB)", appointed: "2024-05-28", ref: LD, file: "" },
  { name: "Mr. W D J W Kumara", role: "Member (Civil Engineer, Transmission Designs - Transmission Lines, CEB)", appointed: "2024-05-28", ref: LD, file: "" },
  { name: "Mrs. P C Munasinghe", role: "Member (Additional Finance Manager (Asset Management), CEB)", appointed: "2024-05-28", ref: LD, file: "" }];
const SR = "Listed in Ministry letter PE/TEN/CANC/SC/2024/08 dated 29-05-2024";
const scapcList = [
  { name: "Mr. H M B P Herath", role: "Chairman (Secretary, Ministry of Tourism & Lands)", appointed: "", ref: SR, file: "" },
  { name: "Dr. J G L S Jayawardena", role: "Member (Secretary, Ministry of Power & Energy)", appointed: "", ref: SR, file: "" },
  { name: "Ms. K N K Somaratna", role: "Member (Secretary, Ministry of Fisheries)", appointed: "", ref: SR, file: "" },
  { name: "Dr. S Narendra De Silva", role: "Member (General Manager (Actg), CEB)", appointed: "", ref: SR, file: "" },
  { name: "Ms. Hemantha Pubudusiri", role: "Member (Director, Dept. of External Resources)", appointed: "", ref: SR, file: "" }];
la.committees.BEC = JSON.parse(JSON.stringify(lb.committees.BEC));
for (const t of [la, lb]) {
  t.committees.TEC = JSON.parse(JSON.stringify(tecList));
  t.committees.SCAPC = JSON.parse(JSON.stringify(scapcList));
}
la.milestones[0].items.push({ label: "TEC appointed by Dept. of Public Finance", date: "2024-05-28", note: "Letter PFD/PMD/App/P&E/2024/01/08 to the Secretary, Ministry of Power and Energy, to assist the SCAPC; forwarded to the General Manager, CEB by Ministry letter PE/TEN/CANC/SC/2024/08 dated 29-05-2024. Covers Lot A and Lot B." });
for (const t of [la, lb]) t.milestones[0].items.push({ label: "TEC/BEC member replaced", date: "2025-07-11", note: "Mrs. P K Sanjeewanie in place of Mr. D M U Weerawardana. DPF letter PFD/PMD/App/Energy/2024/01/08 dated 11-07-2025, forwarded by Ministry of Energy letter PE/TEN/SCAPC/SC/2024/08 dated 16-07-2025. Covers Lot A and Lot B." });

lb.milestones[6].items.push({ label: "DPF letter: HLPC to handle Lot A and Lot B", date: "2026-05-08", note: "Letter PFD/PMD/Energy/Gen/2026/01/02 from the Director General, Public Finance, in reply to Ministry request PE/TEN/SHLPC/SC/2024/08 dated 30-04-2026; the procurements are handled by the HLPC appointed by letter dated 07-05-2026." });
lb.committees.HLPC.push(
  { name: "Ms. W M D T Wickramasinghe", role: "Chairman (Secretary, Ministry of Women and Child Affairs)", appointed: "", ref: "Agreed (yes, signed) on validity extension, BEC report 28-04-2026", file: "" },
  { name: "Mr. G M R D Aponsu", role: "Member (Secretary, Ministry of Energy)", appointed: "", ref: "Agreed (yes, signed) on validity extension, BEC report 28-04-2026", file: "" },
  { name: "Ms. L K A S Gunasekara", role: "Member (Additional Director General, Comptroller General's Office)", appointed: "", ref: "Agree box and signature blank on validity extension decision", file: "" });

// ---- Committees merged: TEC -> BEC; SCAPC / SHLPC -> HLPC (stage shown on each member) ----
const mb = (name, role, appointed, ref, stage) => ({ name, role, appointed, ref, stage, file: "" });
const LD2 = "DPF letter PFD/PMD/App/P&E/2024/01/08 dated 28-05-2024";
const becBase = () => [
  mb("Mr. Anuruddha Thilakarathne", "Chairman (Project Director, GPDEEIIP Tr.II, CEB)", "2024-05-28", LD2, "TEC / BEC"),
  mb("Mr. R A D R Ranasinghe", "Member, Treasury representative (Director, Department of Management Services)", "2024-05-28", LD2, "TEC / BEC"),
  mb("Mr. D M U Weerawardana", "Member, Ministry representative (Deputy Director (Planning), Ministry of Power and Energy)", "2024-05-28", LD2 + "; replaced 11-07-2025", "TEC (replaced)"),
  mb("Mrs. P K Sanjeewanie", "Member, in place of Mr. D M U Weerawardana (Director (Development), Ministry of Energy)", "2025-07-11", "DPF letter PFD/PMD/App/Energy/2024/01/08 dated 11-07-2025; Ministry of Energy letter PE/TEN/SCAPC/SC/2024/08 dated 16-07-2025", "BEC"),
  mb("Mrs. W S N Perera", "Member (Project Manager, PSRSP PII P2-OU3, CEB)", "2024-05-28", LD2, "TEC / BEC"),
  mb("Mr. P L S Bhasura", "Member (Electrical Engineer, Transmission Designs - Grid Substations, CEB)", "2024-05-28", LD2, "TEC / BEC"),
  mb("Mr. U K S De Silva", "Member (Civil Engineer, SKTDP, CEB)", "2024-05-28", LD2, "TEC / BEC"),
  mb("Mr. W D J W Kumara", "Member (Civil Engineer, Transmission Designs - Transmission Lines, CEB)", "2024-05-28", LD2, "TEC / BEC"),
  mb("Mrs. P C Munasinghe", "Member (Additional Finance Manager (Asset Management); later Director Finance (Energy Ventures), CEB)", "2024-05-28", LD2, "TEC / BEC")];
const becExtraA = () => [
  mb("Mr. D Nallaperuma", "Member (Director (Planning), Ministry of Energy)", "", "Present at SHLPC meeting 01 (20-03-2025); not on the 28-05-2024 letter; appointment letter not provided", "BEC (to confirm)"),
  mb("Eng. S W Kumarawadu", "Member (Project Director, PSRSP, CEB)", "", "Present at SHLPC meeting 01 (20-03-2025); not on the 28-05-2024 letter; appointment letter not provided", "BEC (to confirm)"),
  mb("Mrs. M G G K Jayawardhana", "Member (DFM (Projects), CEB)", "", "Present at SHLPC meeting 01 (20-03-2025); not on the 28-05-2024 letter; appointment letter not provided", "BEC (to confirm)")];
const SR2 = "Listed in Ministry of Power and Energy letter PE/TEN/CANC/SC/2024/08 dated 29-05-2024";
const scapc = () => [
  mb("Mr. H M B P Herath", "Chairman (Secretary, Ministry of Tourism & Lands)", "2024-05-29", SR2, "SCAPC"),
  mb("Dr. J G L S Jayawardena", "Member (Secretary, Ministry of Power & Energy)", "2024-05-29", SR2, "SCAPC"),
  mb("Ms. K N K Somaratna", "Member (Secretary, Ministry of Fisheries)", "2024-05-29", SR2, "SCAPC"),
  mb("Dr. S Narendra De Silva", "Member (General Manager (Actg), CEB)", "2024-05-29", SR2, "SCAPC"),
  mb("Ms. Hemantha Pubudusiri", "Member (Director, Dept. of External Resources)", "2024-05-29", SR2, "SCAPC")];
const shlpcA = () => [
  mb("Mr. K M G S N Kaluwewe", "Chairman (Secretary, Ministry of Education, Higher Education and Vocational Education)", "", "Present at SHLPC meetings 01 (20-03-2025) and 07 (10-04-2026); appointment letter not provided", "SHLPC"),
  mb("Prof. K T M Udayanga Hemapala", "Member (Secretary, Ministry of Energy)", "", "Present at SHLPC meetings 01 and 07; appointment letter not provided", "SHLPC"),
  mb("Mr. S M Piyatissa", "Member (Secretary, Ministry of Labour)", "", "Present at SHLPC meetings 01 and 07; appointment letter not provided", "SHLPC"),
  mb("Eng. W Edussuriya", "Member (Actg. General Manager, CEB)", "", "Present at SHLPC meeting 01 (20-03-2025); appointment letter not provided", "SHLPC"),
  mb("Eng. N S Wettasinghe", "Member (CEO, NTNSP)", "", "Present at SHLPC meeting 07 (10-04-2026); appointment letter not provided", "SHLPC"),
  mb("Ms. S. Ajitha Batagoda", "Member (Director, Dept. of National Budget; later Additional Director General, Public Debt Management)", "", "Present at SHLPC meetings 01 and 07; appointment letter not provided", "SHLPC")];
const hlpc = () => {
  const H = "DPF letters PFD/PMD/App/Energy/2025/01/02 dated 07-05-2026 and PFD/PMD/Energy/Gen/2026/01/02 dated 08-05-2026 (NPC Circular 01/2026)";
  return [
    mb("Ms. W M D T Wickramasinghe", "Chairperson until relieved 26-05-2026 (Secretary, Ministry of Women and Child Affairs)", "2026-05-07", H + "; DPF letter PFD/PMD/App/Energy/Gen/2026/01/02 dated 26-05-2026", "HLPC"),
    mb("Mr. G M R D Aponsu", "Member (Secretary / Secretary (Acting), Ministry of Energy)", "2026-05-07", H, "HLPC"),
    mb("Ms. L K A S Gunasekara", "Member (Additional Director General, Comptroller General's Office)", "2026-05-07", H, "HLPC"),
    mb("Mr. K M G S Nalaka Kaluwewe", "Chairman, in place of Ms. W M D T Wickramasinghe (Secretary, Ministry of Education, Higher Education and Vocational Education)", "2026-05-26", "DPF letter PFD/PMD/App/Energy/Gen/2026/01/02 dated 26-05-2026; Ministry of Energy letter PE/TEN/SHLPC/SC/2024/08 dated 27-05-2026", "HLPC")];
};
la.committees = { BEC: becBase().concat(becExtraA()), HLPC: scapc().concat(shlpcA(), hlpc()) };
lb.committees = { BEC: becBase(), HLPC: scapc().concat(hlpc()) };

// ---- NHKTGEP ----
const it = (label, date, note, x) => Object.assign({ label, date, note }, x || {});
const TL24 = "DPF letter PFD/PMD/App/P&E/2024/01/13 dated 23-08-2024 (Ministry of Power and Energy letter PE/TEN/SCAPC/SJ/2024/09 dated 27-08-2024)";
const BL25 = "DPF letter PFD/PMD/App/Energy/2024/01/13 dated 21-08-2025";
nh1.title = "NHKTGEP Lot A: New Habarana – Kappalthurai 220 kV Transmission Line";
nh1.ref = "CEB/PR/TRPR/CEATP-I/2024/ICB/LOT A (AIIB project P000897; the Daily News addendum text shows P000921, the SKTDP number, apparently copied from a template)";
nh1.estCost = "USD 43.67 million (LKR 12,999.14 million at USD 1 = LKR 297.65) per HLPC minute 01; the unpublished invitation drafts show USD 35 million and USD 32 million; the published figure is to be confirmed";
nh1.scope = "Design, supply, construction, erection, stringing, testing and commissioning of a 220 kV double-circuit, three-phase line of about 77 km with HTLS conductors (twin bundle) and two OPGW, from the existing New Habarana 220/132 kV Switching Station to the existing Kappalthurai 220(132)/33 kV Grid Substation. Turnkey, measure & pay. Construction period 730 days. Single-stage two-envelope IOCT under AIIB PIR. Bid security LKR 180,000,000 or USD 600,000. Tender document fee LKR 250,000 (courier LKR 260,000 domestic, USD 1,150 overseas). Eligibility: 3 similar contracts in 10 years or 2 in 5 years, each USD 25 million or more; average annual turnover USD 32 million over 5 years. Addendum 01: tender validity until 27-05-2027 (203 days), tender security until 22-07-2027 (56 days beyond). Bids delivered to the Chairman, HLPC, Office of the CTO (NTNSP), 4th Floor, Landmark Building, 385 Galle Road. Award notice to be published on the NTNSP, AIIB and General Treasury websites and in the Gazette in Sinhala, Tamil and English.";
nh1.validity.tender = { original: "2027-04-20", extensions: [{ issued: "2026-10-16", newExpiry: "2027-05-27", ref: "Addendum No. 01 (Amendment 03)", reason: "Validity period 180 to 203 days after the closing date moved from 22-10-2026 to 05-11-2026. Published in the Daily News 16-10-2026." }] };
nh1.validity.security = { original: "2027-05-18", extensions: [{ issued: "2026-10-16", newExpiry: "2027-07-22", ref: "Addendum No. 01 (Amendment 04)", reason: "Security valid 56 days beyond the original validity period, instead of 28 days." }] };
set(nh1, 1, { date: "2026-08-28", status: "done", note: "Paper advertisement dated 28-08-2026, closing 22-10-2026, also on the NTNSP website. The invitation drafts dated 20 and 25 Aug 2026 (deadline 15-10-2026, USD 35 / 32 million) were not published." });
set(nh1, 2, { status: "pending", note: "No details received yet." });
set(nh1, 3, { date: "2026-09-14", status: "done", note: "Pre-bid site visit conducted on 14-09-2026. The invitation does not mention a pre-bid meeting; its details are awaited." });
set(nh1, 4, { date: "2026-11-05", status: "active", note: "Submission and opening 05-11-2026, 10:00 a.m., after Addendum 01. Delivered to the Chairman, HLPC, Office of the CTO (NTNSP), 385 Galle Road." });
nh1.milestones[0].items.push(
  it("Cabinet approves SCAPC and TEC", "2024-07-29", "Cabinet Memorandum dated 23-07-2024 by the Minister of Power & Energy."),
  it("TEC and SCAPC appointed", "2024-08-23", TL24 + ". Appointed to assist the SCAPC for CEATP PMU 1 Lot A."),
  it("Ministry reminder: draft bid document not yet submitted", "2025-07-16", "Letter PE/TEN/SHLPC/SJ/2024/09 to GM CEB; copy Mr. K M G U R Dias, DGM (Transmission Projects). Asked for the status and to expedite; passed to the BEC Chairman and PM on 30-07-2025."),
  it("Proposal revision letter", "2025-08-15", "Letter CEB/CEATP-1/TE/10A from the Project Manager CEATP-I to the DGM (Transmission Planning): AIIB project name, implementation period 2026-2028, HTLS conductors guaranteed for 1000 MW per circuit, revised Lot A and Lot B scopes. TEC review for Lot A then planned for the following week; publication targeted 11-09-2025."),
  it("HLPC and BEC appointed (TEC and SCAPC reconstituted)", "2025-08-21", BL25 + ", in reply to Ministry letter dated 15-08-2025. Ministry letter PE/TEN/HLPC/SJ/2024/09 (date 2?.08.2025) received at CEB 27-08-2025."),
  it("BEC report and draft bidding documents submitted", "2026-04-23", "BEC report CEB/PR/TRPR/CEATP-1/2024/ICB/LOT A, tabled for HLPC approval."),
  it("HLPC meeting 01: draft bidding document and time schedule", "2026-05-13", "HLPC: Mr. K R Uduwawala (Chairman), Mr. G M R D Aponsu, Ms. Chamila S Karunathilake, all agreed. BEC: Mr. K S S Kumara, Mr. R C P Rajapaksha, PE Mr. W W S D Jayawardena. Estimate USD 43.67 million; bid security LKR 180 million. Decision: concurrence subject to AIIB advance procurement approval; bids only after that approval; resubmit the advertisement (sec 5.4, Procurement Manual 2024) and time schedule; NTNSP to appoint a bid opening committee for HLPC approval; BEC to report on revised vs initial proposal; Cabinet approval if scope or estimate changes. ESIA submitted to AIIB; AIIB loan at appraisal stage.", { type: "document" }),
  it("Minute forwarded to NTNSP (received 2 Jun 2026)", "2026-06-02", "Ministry of Energy letter PE/TEN/HLPC/SJ/2024/09 dated about 01-06-2026, signed U L Jayasundara; received by CEO 2 Jun, CTO 3 Jun, Project Director 8 Jun, 17 Jun 2026.", { type: "document" }),
  it("Publication approval requested", "2026-08-17", "Letter CEB/CEATP-I/TE/10A to the CTO / Project Director: notice to the media unit by 18-08-2026 and publication by 20-08-2026 (AIIB PPMS plan).", { type: "document" }),
  it("Invitation draft dated 20-08-2026 (not published)", "2026-08-20", "General Procurement Notice wording; estimate USD 35 million (amount of financing); deadline 15-10-2026.", { type: "document" }),
  it("Invitation draft dated 25-08-2026 (not published)", "2026-08-25", "Special Procurement Notice wording; estimate USD 32 million; deadline 15-10-2026.", { type: "document" }),
  it("Paper advertisement / Invitation for Tenders published", "2026-08-28", "Closing and opening 22-10-2026, 10:00 a.m.; bid bond LKR 180,000,000 or USD 600,000; documents LKR 250,000. Also shown on the NTNSP website (issued by the CEO, NTNSP). Tender document sales started 28-08-2026.", { type: "document" }));
nh1.milestones[3].items.push(
  it("Planned deadline on invitation drafts (never published)", "2026-10-15", "Appears only on the drafts dated 20 and 25 Aug 2026; to be confirmed by the user."),
  it("Addendum 01: closing date extended", "2026-10-16", "Published in the Daily News on 16-10-2026. Closing and opening 05-11-2026, 10:00 a.m.; tender validity to 27-05-2027 (203 days); security to 22-07-2027.", { newDate: "2026-11-05" }));
nh1.committees = { BEC: [
  mb("Mr. K S S Kumara", "Chairman (DGM Corporate and Project Coordination, CEB; Director-Contracts (Infrastructure Development), NTNSP in 2026)", "2024-08-23", TL24 + "; continued in the BEC per " + BL25, "TEC / BEC"),
  mb("Ms. D A S Dahanayake", "Member (Director, Dept. of Trade and Investment Policies); Treasury representative in 2024, Ministry representative in 2025; Director, Department of Public Finance on the 2026 BEC report", "2024-08-23", TL24 + "; continued in the BEC per " + BL25, "TEC / BEC"),
  mb("Mr. D M Upul Weerawardena", "Member, Ministry representative (Deputy Director (Planning), Ministry of Power and Energy)", "2024-08-23", TL24 + "; not on the 2025 BEC", "TEC only"),
  mb("Ms. J L Athukorala", "Member, Treasury representative (Accountant, Ministry of Energy); not among the signatories of the 01-10-2026 BEC report", "2025-08-21", BL25, "BEC"),
  mb("Mr. A U S Ranathunga", "Member (Chief Engineer, Transmission Designs - Grid Substations, CEB)", "2024-08-23", TL24 + "; continued in the BEC per " + BL25, "TEC / BEC"),
  mb("Mr. R C P Rajapaksha", "Member (Electrical Engineer CEATP-1; Manager (CEATP-1), NTNSP in 2026)", "2024-08-23", TL24 + "; continued in the BEC per " + BL25, "TEC / BEC"),
  mb("Mr. W W S D Jayawardhana", "Member (Civil Engineer, CEATP-1); attended 13-05-2026 as Project Engineer", "2024-08-23", TL24 + "; not on the 2025 BEC", "TEC only"),
  mb("Mr. W D J W Kumara", "Member (Civil Engineer, Transmission Designs - Transmission Lines, CEB)", "2024-08-23", TL24 + "; continued in the BEC per " + BL25, "TEC / BEC"),
  mb("Mrs. M G G K Jayawardena", "Member (Deputy Finance Manager (Projects), CEB)", "2024-08-23", TL24 + "; continued in the BEC per " + BL25, "TEC / BEC")],
 HLPC: [
  mb("Mr. H M B P Herath", "Chairman (Secretary, Ministry of Buddhasasana, Religious & Cultural Affairs)", "2024-08-23", TL24, "SCAPC"),
  mb("Mr. Saman Dharshana Pandikorala", "Member (Secretary, Ministry of Irrigation)", "2024-08-23", TL24, "SCAPC"),
  mb("Dr. Sulakshana Jayawardena", "Member (Secretary, Ministry of Power & Energy)", "2024-08-23", TL24, "SCAPC"),
  mb("Dr. Narendra de Silva", "Member (Actg. General Manager, CEB)", "2024-08-23", TL24, "SCAPC"),
  mb("Ms. Hemantha Pubudusiri", "Member (Director, Dept. of External Resources)", "2024-08-23", TL24, "SCAPC"),
  mb("Mr. K R Uduwawala", "Chairman (Secretary, Ministry of Environment)", "2025-08-21", BL25, "HLPC"),
  mb("Prof. K T M Udayanga Hemapala", "Member (Secretary, Ministry of Energy)", "2025-08-21", BL25, "HLPC"),
  mb("Ms. Chamila S. Karunathilake", "Member, Treasury representative (Additional Director General, Dept. of Development Finance)", "2025-08-21", BL25, "HLPC"),
  mb("Mr. G M R D Aponsu", "Member (Secretary, Ministry of Energy)", "", "Sat as HLPC member at meeting 01 (13-05-2026); appointment letter not provided", "HLPC (13-05-2026)")] };

nh2.title = "NHKTGEP Lot B: Augmentation of Kappalthurai GS and associated grid modifications";
nh2.ref = "Tender number to be confirmed";
nh2.estCost = "USD 1.59 million (2024 TEC letter, earlier scope) - current estimate to be confirmed";
nh2.scope = "As revised in the Project Manager's letter of 15-08-2025: commission Kappalthurai GS at 220 kV (two 132 kV line bays, bus bars, two transformer bays), associated secondary system modifications, and protection relay, SCADA and SAS modifications at New Anuradhapura and Trincomalee GS. Contingency scope tied to SKTDP Lot B (upgrade of the new Kappalthurai bays and the Sampur collector substation to 220 kV if SKTDP Lot B completes earlier at 132 kV), omissible if not required. The 2024 TEC letter described it as augmentation of the New Habarana 220/132 kV Switching Station and modification of the Kappalthurai 220/33 kV grid substation. Procurement committee: Board Procurement Committee (CEB).";
set(nh2, 1, { status: "active", note: "Preparation stage. TEC appointed 2024; scope revised August 2025. No invitation received yet." });
nh2.milestones[0].items.push(
  it("AGM (Projects) letter requesting a TEC", "2024-04-04", "Letter CEB/PR/TR-PR/CEAPT1/TEC/2024/Lot B/001 (referred to; not provided)."),
  it("Chairman (CEB) minute on the TEC", "2024-08-22", "Minute on the AGM (Projects) letter."),
  it("TEC appointed under the Board Procurement Committee (CEB)", "2024-08-26", "Letter CEB/AGMP/Tr.Pr./CEATP-1 (Reference No CEB/PR/TR-PR/CEAPT1/TEC/2024/Lot B/001) from AGM (Projects) (cover up duties), received 30-08-2024. TEC to review the draft bidding document, prepare the advertisement, evaluate bids and obtain approval from the BPC. Estimate USD 1.59 million. Attendance to be submitted with the final TEC report for payments.", { type: "document" }),
  it("Revised Lot B scope proposed", "2025-08-15", "Letter CEB/CEATP-1/TE/10A: Lot B recast as the Kappalthurai GS augmentation with modifications at New Anuradhapura and Trincomalee GS, plus the SKTDP-linked contingency scope.", { type: "document" }));
nh2.committees = { BEC: [
  mb("Eng. K.S.S. Kumara", "Chairman (DGM Corporate and Project Coordination, CEB)", "2024-08-26", "AGM (Projects) letter dated 26-08-2024 (Board Procurement Committee)", "TEC"),
  mb("Eng. A.U.S Ranathunga", "Member (Chief Engineer, Transmission Designs - Grid Substations)", "2024-08-26", "AGM (Projects) letter dated 26-08-2024", "TEC"),
  mb("Eng. R.C.P. Rajapakshe", "Member (Electrical Engineer, CEATP-1)", "2024-08-26", "AGM (Projects) letter dated 26-08-2024", "TEC"),
  mb("Eng. W.W.S.D Jayawardhana", "Member (Civil Engineer, CEATP-1)", "2024-08-26", "AGM (Projects) letter dated 26-08-2024", "TEC"),
  mb("Eng. W.D.J.W. Kumara", "Member (Electrical Engineer, Transmission Designs - Transmission Line)", "2024-08-26", "AGM (Projects) letter dated 26-08-2024", "TEC"),
  mb("Mrs. M.G.G.K. Jayawardena", "Member (Deputy Finance Manager (Projects))", "2024-08-26", "AGM (Projects) letter dated 26-08-2024", "TEC")], HLPC: [] };
nh1.id = "NHKTGEP-A"; nh2.id = "NHKTGEP-B";
const D_EVENTS_NH = [
  { label: "Cabinet approves SCAPC and TEC", date: "2024-07-29", note: "Cabinet Memorandum dated 23-07-2024." },
  { label: "AIIB technical discussions scheduled", date: "2025-08-19", note: "Per the CEATP-I letter of 15-08-2025; SKTDP loan negotiations on 18-08-2025. AIIB advance procurement approval for Lot A: date not entered." }];


// ---- Bidder statuses, HLPC decision highlights, NHKTGEP/SKTDP additions ----
const bs = (t, kw, status, detail) => { const x = t.milestones[3].items.find(y => y.type === "bidder" && y.label.includes(kw)); if (!x) throw new Error("bidder " + kw); x.status = status; x.detail = detail; };
const dec = (t, prefix, hl, extra) => { const f = t.milestones.flatMap(m => m.items).find(x => x.label.startsWith(prefix)); if (!f) throw new Error("dec " + prefix); Object.assign(f, { type: "decision", hl }, extra || {}); };
const LAL = "Validity extension letters of 14-04-2026, 17-07-2026 and 07-10-2026 were sent to all bidders. Consent records are not entered.";
bs(la, "RSIPL", "Excluded (declined validity extension)", "JV partners: R.S. Infraprojects Pvt. Ltd., India, and HanBaek Co., Ltd., Republic of Korea. Declined to extend tender validity and security by letter RSIPL/NTNSP/SKTDP/LOT-A/2026-27/Return BG of 19-08-2026 (Mr. Sumeet Sharma, Authorized Signatory). NTNSP memorandum to the HLPC 21-09-2026; notified non-responsive on 08-10-2026 (CEB/CEATP-I/SKTDP/TE/12C/007). Bank guarantee to be returned or lapse; no forfeiture. Financial envelope unopened until after contract signing.");
for (const [k, n] of [["TBEA", "Mr. Wei Wenkui, Chief Representative, Sri Lanka Office"], ["Shanghai Electric", "Mr. Chen Zhijie"], ["KEC International", "Mr. Kartar Singh, Senior Manager Sales and Tendering"], ["Ceylex", "Mr. Liyanage Nisal Shaminda Perera, CEO"], ["Prakash", "Mr. Kirihettiliyanage Don Anton Shehan Milinda"], ["Transrail", "Mr. Amol Wankhede"]]) bs(la, k, "Technically responsive", "Representative: " + n + ". Financial tender opening 15-10-2026. " + LAL);
bs(lb, "TBEA", "Non-responsive (security not extended)", "Tender security had expired; TBEA replied on 11-08-2026 that it could not extend it or provide a bank draft, and accepted rejection of its price tender. Declared non-responsive at the financial opening of 13-08-2026 (letter of 12-08-2026, ref NTNSP/PM/CEATP-I/SKTDP/LOT B/11 D/FIN-OPEN-TBEA-ALERT). Financial envelope kept sealed, returnable after contract signing. Reason letter attached to Ministry letter PE/TEN/SHLPC/SC/2024/08 Lot B of 24-09-2026: bid validity and bid security validity not extended (ITT 20.4).");
const NS = "Not selected: bid price higher than the lowest evaluated substantially responsive bidder (Ministry letter PE/TEN/SHLPC/SC/2024/08 Lot B, 24-09-2026). Financial tender opened 13-08-2026; price not entered.";
bs(lb, "Yantai", "Not selected (higher price)", "JV partners: Yantai Dongfang Wisdom Electric Co., Ltd. and Chint Electric Co., Ltd. Managing Director. " + NS);
bs(lb, "Shandong Taikai", "Not selected (higher price)", "Commercial Manager. " + NS);
bs(lb, "CCCE-ETERN", "Not selected (higher price)", "JV partners: CCC Engineering Ltd. and Jiangsu ETERN Company Limited. Managing Director. " + NS);
bs(lb, "CMC-KE", "Not selected (higher price)", "JV partners: China National Machinery Import and Export Corporation and Shijiazhuang Kelin Electric Co., Ltd. Managing Director. " + NS);
bs(lb, "Ceylex", "Recommended for award", "JV Ceylex Engineering (Pvt) Ltd with Xingneng Electric Power Construction Co., Ltd., 69/1 Ward Place, Colombo 07. Recommended for award by the HLPC (Ministry letter PE/TEN/SHLPC/SC/2024/08 Lot B, 24-09-2026). Other bidders could appeal to the Procurement Appeal Board within seven working days.");
dec(la, "SHLPC meeting 01: draft bidding document", ["Approved the draft bidding document subject to amendments and an explanatory note on sec 35.2", "Bids to be called only after AIIB and Ministry of Finance confirm the loan", "On AIIB's advice: bid security raised from LKR 45 million to LKR 65 million, cash requirement cut to USD 2.0 million, mandatory site visit removed"], { tabled: "TEC report CEB/AGM(P)/2024/IOCT/SKTDP/Lot A dated 06-03-2025", votes: "Mr. Kaluwewe (Chairman) signed, agree box blank; Prof. Hemapala, Mr. Piyatissa, Eng. Edussuriya, Ms. Batagoda: yes" });
dec(la, "SHLPC meeting 07: validity extension decision", ["Extend bid validity to 20-07-2026 and bid security to 17-08-2026 (3 months)", "Technical evaluation in its final stage; remaining approvals expected to exceed validity"], { tabled: "BEC report dated 31-03-2026", votes: "All five members: yes, signed" });
dec(la, "HLPC decision: second extension", ["Extend bid validity to 20-10-2026 and bid security to 15-11-2026 (3 months each)"], { tabled: "Meeting of 16-07-2026" });
dec(la, "HLPC decision: third extension", ["Extend bid validity to 20-01-2027 and bid security to 17-02-2027 (3 months each), by circulation", "The letter prints the security date as 17.02.2026, evidently 2027"], { tabled: "BEC report dated 02-10-2026" });
la.milestones[6].items.push({ label: "SHLPC meeting: revised estimate", date: "2025-06-18", type: "decision", hl: ["Directed the BEC to submit the revised estimate for approval with justification"], note: "Known from SHLPC minute 07; the minute itself is not on file." });
dec(lb, "SHLPC approved bidding documents and draft advertisement", ["Approved the bidding documents and draft advertisement subject to AIIB comments and Advance Procurement Clearance", "Contract award only on written funding assurance from AIIB and the Ministry of Finance"], { tabled: "BEC report 04-06-2025" });
dec(lb, "Revised bidding documents approved", ["Approved the revised bidding documents incorporating AIIB's comments, after AIIB's formal concurrence"], { tabled: "BEC report 25-08-2025" });
dec(lb, "SHLPC decision to extend bid closing", ["Extend the bid closing date by three weeks and issue Addendum No. 01, subject to AIIB concurrence"], { tabled: "BEC report 16-10-2025" });
dec(lb, "SHLPC approved calling written clarifications", ["Approved calling tender-specific written clarifications from all bidders"]);
dec(lb, "HLPC decision: extend validity", ["Extend bid validity to 18-08-2026 and bid security to 15-09-2026", "Technical evaluation in its final stages; staff shortage and CEB restructuring noted"], { tabled: "BEC report 28-04-2026 (HLPC minute 05, by circulation 11-05-2026)", votes: "Ms. Wickramasinghe (Chairman) and Mr. Aponsu: yes, signed; Ms. Gunasekara: agree box and signature blank" });
lb.milestones[5].items.push(
  { label: "TBEA reply: cannot extend tender security", date: "2026-08-11", type: "document", note: "TBEA's written reply (not on file) to the Project Manager's memorandum of 11-08-2026; it accepted rejection of its price tender." },
  { label: "TBEA declared non-responsive; envelope kept sealed", date: "2026-08-12", ref: "NTNSP/PM/CEATP-I/SKTDP/LOT B/11 D/FIN-OPEN-TBEA-ALERT", type: "document", note: "Letter to the Chairman, Tender Opening Committee: announce TBEA non-responsive at the opening of 13-08-2026 (ITT 20.4), keep its financial envelope sealed and do not hand it over (return only after selection and contract signing, ITT 26.10(b)), and record this in the opening minutes. The memorandum of 11-08-2026 carries the same reference." });
lb.milestones[7].items.push(
  { label: "HLPC recommends award to JV Ceylex Engineering - Xingneng", date: "2026-09-24", ref: "PE/TEN/SHLPC/SC/2024/08 Lot B", type: "decision", hl: ["Award of Lot B recommended to JV Ceylex Engineering (Pvt) Ltd with Xingneng Electric Power Construction Co., Ltd.", "Five other bidders notified, each with a reason letter: TBEA non-responsive (validity and security not extended, ITT 20.4); four bidders not selected on higher price", "Representations to the Procurement Appeal Board within seven working days, LKR 100,000 fee"], note: "Ministry letter signed by Mr. G M R D Aponsu, Secretary (Acting); received at NTNSP 25-09-2026. Date of the HLPC meeting and the AIIB and Cabinet steps are not on file." },
  { label: "Representation window (Procurement Appeal Board)", date: "2026-09-25", newDate: "2026-10-06", type: "revision", note: "Seven working days under clauses 8.5.2 and 8.4 of the Procurement Guidelines and Manual 2024; about 6 Oct 2026, depending on when each bidder received its letter and on holidays. Any appeal: not on file." });
set(lb, 8, { date: "2026-09-24", status: "active", note: "Award recommended to JV Ceylex Engineering - Xingneng; objection window closed about 6 Oct 2026. Notification of award, performance security and contract signing: not on file." });
nh1.milestones[2].items.push({ label: "Pre-bid site visit", date: "2026-09-14", note: "Conducted successfully. Attendees not entered; pre-bid meeting not on file." });
nh1.milestones[3].items.push(
  { label: "Published closing date", date: "2026-08-28", newDate: "2026-10-22", type: "revision", note: "Per the 28-08-2026 paper advertisement, the NTNSP website notice and the BEC report (baseline schedule)." },
  { label: "Addendum 01: five Tender Data Sheet amendments", date: "2026-10-16", type: "revision", hl: ["ITT 23.1 / 26.1: closing and opening 22-10-2026 to 05-11-2026, 10:00 a.m.", "ITT 19.1: validity until 20-04-2027 (180 days) changed to 27-05-2027 (203 days)", "ITT 20.3(a): security until 18-05-2027 (28 days beyond) changed to 22-07-2027 (56 days beyond)", "ITT 45.3: award notice on NTNSP and AIIB websites only, changed to NTNSP, AIIB and Treasury websites and the Gazette in three languages"], note: "Published in the Daily News on 16-10-2026. Approved by the HLPC (about 13-10-2026; Ministry letter 14-10-2026) after AIIB's no objection of 07-10-2026." });
dec(nh1, "HLPC meeting 01", ["Concurrence with the procurement document, subject to AIIB advance procurement approval", "Invite bids only after AIIB approves advance procurement", "Resubmit the draft advertisement (sec 5.4, Procurement Manual 2024) and the time schedule with BEC approval", "NTNSP to appoint a bid opening committee for HLPC approval", "BEC to report on the revised vs initial proposal; Cabinet approval if scope or estimate changes", "All BEC members to sign the procurement document"], { tabled: "BEC report dated 23-04-2026", votes: "Mr. K R Uduwawala (Chairman), Mr. G M R D Aponsu and Ms. Chamila S Karunathilake: yes, signed" });


// ---- Latest additions: NHKTGEP prospective bidders and addendum approvals; AIIB notices ----
const pb = (label, note, status, detail, date) => ({ label, date: date || "", note, type: "bidder", status, detail });
nh1.milestones[1].items.push(
  pb("R.S. InfraProjects Pvt. Ltd. (India)", "Purchased the bidding documents 28-08-2026.", "No extension requested", "BEC report of 01-10-2026. (Also the lead partner of RSIPL-HBCL JV on SKTDP Lot A.)", "2026-08-28"),
  pb("Vidullanka PLC (Sri Lanka)", "Purchased 08-09-2026.", "No extension requested", "BEC report of 01-10-2026.", "2026-09-08"),
  pb("Sichuan Electric Power Transmission and Transformation Construction Co., Ltd. (China)", "No. 39 Tianlang Road, West Hi-Tech Zone, Chengdu 611731. Purchased 09/09/2026; received 28/09.", "Asked 1 month extension", "Letter of 23-09-2026: bank procedures for the bid guarantee and the Mid-Autumn / National Day holidays (25 Sep to 7 Oct); asked to extend closing by one month. Signed by Mr. K. D. A. Shehan Milinda, Authorized Signatory. BEC recommended 2 weeks.", "2026-09-09"),
  pb("Angelique International Limited (India)", "Purchased 11/09/2026 (ref AIL/02).", "Asked at least 3 weeks + clarifications", "Letter of 21-09-2026, ref AIL/2026-27/LKA/NTNSP/220kV-TL/NHK/02: clarifications in Annex 1 (not on file) and at least three weeks more, for tower and foundation design for the HTLS conductor system. BEC recommended 2 weeks.", "2026-09-11"),
  pb("China Machinery Engineering Corporation, CMEC (China)", "Purchased 16/09/2026; received 21/09.", "Asked 1 month extension", "Letter of 21-09-2026 signed by Mr. Wen Xinguo, Project Manager: 22-10-2026 to 23-11-2026 because of the Mid-Autumn Festival holidays. BEC recommended 2 weeks.", "2026-09-16"),
  pb("TBEA Co. Ltd. (China)", "Purchased 16/09/2026.", "No extension requested", "BEC report of 01-10-2026. (TBEA was excluded from SKTDP Lot B.)", "2026-09-16"),
  pb("Sinohydro Bureau 14 Co., Ltd. / Power China (China)", "No. 673 Liangting Middle Road, Kunming (Yunnan). Purchased 17/09/2026; received 22/09.", "Asked 1.5 months + clarifications", "Letter of 22-09-2026: asked for general arrangement drawings (tower types TDL, TD1, TD3, TD6, TD9, TDT) and dimensioned drawings of suspension and tension towers, and a 1.5-month extension, 22-10-2026 to 07-12-2026. BEC recommended 2 weeks.", "2026-09-17"),
  pb("Ceylex Engineering (Pvt) Ltd (Sri Lanka)", "Purchased 22/09/2026.", "No extension requested", "BEC report of 01-10-2026. (Ceylex JV is recommended for SKTDP Lot B.)", "2026-09-22"));
set(nh1, 2, { date: "2026-08-28", status: "done", note: "Eight prospective tenderers bought the bidding documents between 28-08-2026 and 22-09-2026 (BEC report of 01-10-2026)." });
nh1.milestones[2].items.push(
  { label: "Clarification request: Angelique International", date: "2026-09-21", type: "clarification", note: "Annex 1 to its letter (not on file)." },
  { label: "Clarification request: Sinohydro Bureau 14", date: "2026-09-22", type: "clarification", note: "Tower general arrangement and dimensioned drawings. Replies and any clarifications issued: not on file." });
nh1.milestones[3].items.push(
  { label: "Extension request: Angelique International", date: "2026-09-21", newDate: "", type: "revision", note: "At least three weeks." },
  { label: "Extension request: CMEC", date: "2026-09-21", newDate: "2026-11-23", type: "revision", note: "One month." },
  { label: "Extension request: Sinohydro Bureau 14", date: "2026-09-22", newDate: "2026-12-07", type: "revision", note: "1.5 months." },
  { label: "Extension request: Sichuan Electric", date: "2026-09-23", newDate: "", type: "revision", note: "One month." },
  { label: "BEC report: Addendum 01 and two-week extension", date: "2026-10-01", ref: "CEB/PR/TRPR/CEATP-I/2024/ICB/LOT A", type: "document", hl: ["Recommends the two-week extension (22-10-2026 to 05-11-2026) to allow for SWIFT and local counter-guarantee lead times after the China holidays", "Rectifies ITT 19.1 (180 to 203 days), ITT 20.3(a) (28 to 56 days beyond validity) and ITT 45.3 (Gazette publication) under Procurement Manual 2024", "Eight purchasers: four asked for 3 weeks to 1.5 months; four asked for nothing"], note: "Signed by the seven BEC members." },
  { label: "AIIB no objection to Addendum 01", date: "2026-10-07", type: "document", note: "AIIB letter to the Project Manager on his submission of 06-10-2026 (project P000897): no objection to the new closing date, 203-day validity, 56-day security margin and Gazette publication of the award. AIIB asked for the tender opening minutes." },
  { label: "Project Manager seeks CTO approval to publish the amendment notice", date: "2026-10-08", ref: "NTNSP/CEATP-I/TE/10A", type: "document", note: "CTO approved on 14-10-2026, subject to receipt of the HLPC minute." });
nh1.milestones[4].note = "Planned in the revised time schedule: 05-11-2026 to 30-12-2026.";
nh1.milestones[5].date = "2027-01-26"; nh1.milestones[5].note = "Planned financial tender opening 26-01-2027; financial and combined evaluation 26-01 to 08-02-2027 (revised time schedule).";
nh1.milestones[7].date = "2027-04-20"; nh1.milestones[7].note = "Planned: standstill 30-03 to 12-04-2027; contract award 20-04-2027 in the schedule table, 13-04-2027 in recommendation 5.4 of the BEC report.";
nh1.milestones[6].items.push({ label: "HLPC approves Addendum No. 01 and the two-week extension", date: "2026-10-14", ref: "PE/TEN/HLPC/SJ/2024/09", type: "decision", hl: ["Issue Addendum No. 01 with the rectified ITT 19.1 (203 days), ITT 20.3(a) (56-day security margin) and ITT 45.3 (Gazette publication in three languages)", "Extend the tender submission deadline by two weeks, 22-10-2026 to 05-11-2026", "Publish the paper advertisement for Addendum 01 and send it to all eight registered prospective tenderers", "Endorse the updated procurement time schedule with 05-11-2026 closing and a 13-04-2027 contract award target"], tabled: "BEC report dated 01-10-2026", note: "Ministry letter signed by T Prassanth, Addl. Secretary (Development & Procurement). The decision was about 13-10-2026 according to the CTO's note; the minute is to follow." });
nh1.committees.BEC.push(mb("Mr. Shrimohanan", "Member (Additional Secretary (Logistics))", "", "Signed the BEC report of 01-10-2026; appointment letter not provided", "BEC (2026)"));
la.milestones[3].items.push({ label: "Closing-date extension notice published by AIIB", date: "2025-10-10", ref: "Amendment to Tender Document, SPN_P000921 Lot A EOT (AIIB website)", type: "revision", newDate: "2025-10-22", note: "Text not on file. Closing and technical opening held 22-10-2025." });
lb.milestones[3].items.push({ label: "Lot B EOT Addendum No. 1 listed by AIIB", date: "2025-10-28", ref: "SPN_P000921 Lot B EOT Addendum No. 1 (AIIB website)", type: "revision", newDate: "2025-11-19", note: "Published in the Daily News on 29-10-2025." });

for (const t of [nh1, nh2, la, lb]) for (const m of t.milestones) for (const x of m.items) if (!x.type)
  x.type = /^Clarification|^Pre-bid/i.test(x.label) ? "clarification" : /extend|extension|rescheduled|original/i.test(x.label) ? "revision" : /letter|notif|minute|decision|approv|report|appoint|replac|forwarded|memo|TEC|SHLPC|HLPC/i.test(x.label) ? "document" : "event";

window.TENDERS_DATA = {
  project: "CEATP-I",
  updated: "2026-10-20",
  components: [
    { code: "NHKTGEP", events: D_EVENTS_NH, tenders: [nh1, nh2] },
    { code: "SKTDP", events: [{ label: "AIIB concept review", date: "2025-01-23", note: "Project 000921, USD 22 million (AIIB project page)." }, { label: "AIIB appraisal review", date: "2025-07-17", note: "" }, { label: "AIIB financing approval", date: "2025-09-16", note: "" }, { label: "AIIB project agreement signed", date: "2026-10-08", note: "Signed at the Treasury" }], tenders: [la, lb] }
  ]
};

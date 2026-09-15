import { StyleSheet } from "react-native";

export const Farver = {
  baggrund: "#f4f7f2",
  kort: "#ffffff",
  primær: "#2f6f4e",
  sekundær: "#d7eadf",
  tekst: "#152018",
  muted: "#68756d",
  kant: "#dce5dd",
  alarm: "#b42318",
};

export const GS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Farver.baggrund,
  },
  screen: {
    padding: 16,
    gap: 14,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  hero: {
    backgroundColor: Farver.primær,
    borderRadius: 8,
    padding: 18,
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 8,
  },
  heroText: {
    color: "#edf7f0",
    fontSize: 16,
    lineHeight: 22,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: Farver.tekst,
  },
  subtitle: {
    fontSize: 16,
    color: Farver.muted,
    lineHeight: 22,
  },
  card: {
    backgroundColor: Farver.kort,
    borderColor: Farver.kant,
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: Farver.tekst,
    marginBottom: 4,
  },
  meta: {
    color: Farver.muted,
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
    color: Farver.primær,
  },
  row: {
    marginBottom: 12,
  },
  label: {
    color: Farver.tekst,
    fontWeight: "700",
    marginBottom: 6,
  },
  input: {
    backgroundColor: Farver.kort,
    borderColor: Farver.kant,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Farver.primær,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "800",
  },
});

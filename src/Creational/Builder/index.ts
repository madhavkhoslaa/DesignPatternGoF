import fs from "fs";
class HTMLBuilder {
  private static Meta: String[] = [];
  private constructor() {}
  static Paragraph(Para: String) {
    const ParagraphTemplate: String[] = ["<p>", Para, "</p>"];
    ParagraphTemplate.forEach((paraItem) => {
      this.Meta.push(paraItem);
    });
    return this;
  }
  static Heading(Heading: String, type: number) {
    const HeadingTemplate: String[] = [`<h${type}>`, Heading, `</h${type}>`];
    HeadingTemplate.forEach((Heading) => {
      this.Meta.push(Heading);
    });
    return this;
  }
  static UnorderedList(ListData: any[]) {
    const ListDataTemplate: String[] = ListData.map((data): String => {
      return `<li>${data}</l1>`;
    });
    const UnOrderedListTemplate: String[] = [
      "<ul>",
      ...ListDataTemplate,
      "</ul>",
    ];
    UnOrderedListTemplate.forEach((ol) => {
      this.Meta.push(ol);
    });
    return this;
  }
  static LineBreak() {
    this.Meta.push("<br>");
    return this;
  }
  static Title(title: String) {
    const TitleTemplate = ["<title>", title, "</title>"];
    TitleTemplate.forEach((titleData) => {
      this.Meta.push(titleData);
    });
    return this;
  }
  static OrderedList(ListData: any[]) {
    const ListDataTemplate: String[] = ListData.map((data): String => {
      return `<li>${data}</l1>`;
    });
    const OrderedListTemplate: String[] = [
      "<ol>",
      ...ListDataTemplate,
      "</ol>",
    ];
    OrderedListTemplate.forEach((ol) => {
      this.Meta.push(ol);
    });
    return this;
  }
  static save(dir: String = ".", name: String = "index.html") {
    fs.writeFile(`${dir}/${name}`, this.Meta.join(""), (err) => {
      if (err) {
        console.error(err);
      }
    });
    return this;
  }
  static build(): String {
    return ["<html>", ...this.Meta, "</html>"].join("");
  }
}

/**
 *
 * The content below is copied from Wikipedia
 * https://en.wikipedia.org/wiki/Builder_pattern
 */
const WebPage: String = HTMLBuilder.Title("Wikipedia")
  .Heading("Builder Design Pattern", 1)
  .Paragraph(
    "The builder pattern is a design pattern designed to provide a flexible solution to various object creation problems in object-oriented programming."
  )
  .Heading("Overview", 2)
  .Paragraph(
    "The Builder design pattern is one of the GoF design patterns[1] that describe how to solve recurring design problems in object-oriented software."
  )
  .LineBreak()
  .Paragraph("The Builder design pattern solves problems like")
  .UnorderedList([
    "How can a class (the same construction process) create different representations of a complex object?",
    "How can a class that includes creating a complex object be simplified?",
  ])
  .Heading("Definition", 2)
  .Paragraph(
    "The intent of the Builder design pattern is to separate the construction of a complex object from its representation. By doing so, the same construction process can create different representations.[1]"
  )
  .Heading("Advantages", 2)
  .Paragraph("Advantages of the Builder pattern include:[3]")
  .LineBreak()
  .OrderedList([
    "Allows you to vary a product's internal representation.",
    "Encapsulates code for construction and representation.",
    "Provides control over steps of construction process.",
  ])
  .LineBreak()
  .Heading("Disadvantages", 2)
  .Paragraph("Disadvantages of the Builder pattern include:[3]")
  .LineBreak()
  .UnorderedList([
    "A distinct ConcreteBuilder must be created for each type of product.",
    "Builder classes must be mutable.",
    "May hamper/complicate dependency injection.",
  ])
  .save()
  .build();
console.log(WebPage);

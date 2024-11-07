import styles from './Accordion.module.css';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const toggleContent = (index: number) => {
    const content = document.getElementById(`accordion-content-${index}`);
    const arrow = document.getElementById(`accordion-arrow-${index}`);

    if (content && arrow) {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
      arrow.style.transform = content.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <section key={index} className={styles.accordionItem} aria-labelledby={`accordion-${index}`}>
          <details className={styles.accordionHeader}>
            <summary id={`accordion-${index}`}>{item.title}</summary>
              {item.content}
          </details>
        </section>
      ))}
    </div>
  );
};

export default Accordion;

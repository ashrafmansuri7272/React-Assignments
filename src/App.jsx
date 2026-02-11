const assignments = [
  {
    id: '01',
    title: 'Counter App',
    level: 'Beginner',
    goals: ['useState basics', 'button click handlers', 'conditional styling'],
  },
  {
    id: '02',
    title: 'To-do List',
    level: 'Beginner+',
    goals: ['list rendering', 'forms', 'state updates'],
  },
  {
    id: '03',
    title: 'Product Filter & Search',
    level: 'Intermediate',
    goals: ['controlled inputs', 'derived lists', 'component composition'],
  },
];

export default function App() {
  return (
    <main className="container">
      <h1>React JS Assignments</h1>
      <p>
        A starter repository for practicing React through mini-projects. Pick an assignment and
        build it in your own branch or folder.
      </p>

      <section>
        <h2>Available Assignments</h2>
        <ul className="assignment-list">
          {assignments.map((item) => (
            <li key={item.id} className="assignment-item">
              <div>
                <h3>
                  {item.id}. {item.title}
                </h3>
                <p>Level: {item.level}</p>
              </div>
              <p>{item.goals.join(' • ')}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <small>Tip: Open the assignments folder for task descriptions.</small>
      </footer>
    </main>
  );
}

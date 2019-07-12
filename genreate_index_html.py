import os

from jinja2 import Environment, FileSystemLoader

env = Environment(
    loader=FileSystemLoader('')
)
env.trim_blocks = True
env.lstrip_blocks = True

template = env.get_template('templates/index.html')
root = os.path.dirname(os.path.abspath(__file__))
filename = os.path.join(root, 'index.html')

with open(filename, 'w') as fh:
    fh.write(template.render(
        samples=[
            ('paracetamol', 'Paracetamol'),
            ('caffeine', 'Caffeine'),
            ('lidocaine_and_caffeine', 'Lidocaine and Caffeine'),
            ('flywing', 'Fly Wing'),
        ],
    ))

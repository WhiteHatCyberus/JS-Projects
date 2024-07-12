from flask import Flask, send_from_directory, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        return redirect(url_for('download'))
    else:
        return render_template('index.html')

@app.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')

@app.route('/download')
def download():
    return send_from_directory('test', 'test.pdf', as_attachment=True)

if __name__ == '__main__':
    app.run(port=5000)

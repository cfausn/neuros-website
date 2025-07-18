#!/usr/bin/env python3
"""
Simple HTTP server for testing the website locally
"""

import http.server
import socketserver
import os
import webbrowser
from urllib.parse import unquote

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add headers to prevent caching during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def do_GET(self):
        # Decode URL-encoded paths
        self.path = unquote(self.path)
        
        # Redirect root to index.html
        if self.path == '/':
            self.path = '/index.html'
        
        return super().do_GET()

if __name__ == "__main__":
    # Change to the script's directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print(f"Starting server on http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    print("\nNavigate to:")
    print(f"  http://localhost:{PORT}/              - Homepage")
    print(f"  http://localhost:{PORT}/about/        - About page")
    print(f"  http://localhost:{PORT}/services/     - Services page")
    print(f"  http://localhost:{PORT}/contact/      - Contact page")
    print(f"  http://localhost:{PORT}/privacy/      - Privacy page")
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        # Open browser automatically
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\nServer stopped.")
            pass
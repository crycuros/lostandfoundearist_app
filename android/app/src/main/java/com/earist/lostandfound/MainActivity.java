package com.earist.lostandfound;

import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private SwipeRefreshLayout swipeRefreshLayout;
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Enable immersive full screen
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
        );

        webView = getBridge().getWebView();

        // Swipe-to-refresh setup
        swipeRefreshLayout = new SwipeRefreshLayout(this);
        swipeRefreshLayout.setLayoutParams(new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
        ));
        swipeRefreshLayout.addView(webView);

        swipeRefreshLayout.setOnRefreshListener(() -> {
            webView.reload();
            swipeRefreshLayout.setRefreshing(false);
        });

        // Set WebViewClient to handle loading errors
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, android.webkit.WebResourceError error) {
                showNoInternetScreen();
            }

            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                showNoInternetScreen();
            }
        });

        // Set initial content view
        setContentView(swipeRefreshLayout);
    }

    private void showNoInternetScreen() {
        runOnUiThread(() -> {
            // Create layout for error screen
            LinearLayout layout = new LinearLayout(MainActivity.this);
            layout.setOrientation(LinearLayout.VERTICAL);
            layout.setGravity(Gravity.CENTER);
            layout.setBackgroundColor(0xFFFFFFFF); // white

            // Icon
            ImageView icon = new ImageView(MainActivity.this);
            icon.setImageResource(android.R.drawable.ic_dialog_alert);
            FrameLayout.LayoutParams iconParams = new FrameLayout.LayoutParams(200, 200);
            icon.setLayoutParams(iconParams);

            // Title
            TextView title = new TextView(MainActivity.this);
            title.setText("No Internet Connection");
            title.setTextSize(24);
            title.setGravity(Gravity.CENTER);
            title.setPadding(0, 32, 0, 8);
            title.setTextColor(0xFF222222);

            // Subtitle
            TextView subtitle = new TextView(MainActivity.this);
            subtitle.setText("Please check your connection and try again.");
            subtitle.setTextSize(16);
            subtitle.setGravity(Gravity.CENTER);
            subtitle.setTextColor(0xFF666666);
            subtitle.setPadding(0, 0, 0, 24);

            // Retry button
            TextView reloadButton = new TextView(MainActivity.this);
            reloadButton.setText("Retry");
            reloadButton.setTextSize(18);
            reloadButton.setTextColor(0xFFFFFFFF);
            reloadButton.setGravity(Gravity.CENTER);
            reloadButton.setPadding(40, 20, 40, 20);
            reloadButton.setBackgroundColor(0xFF007BFF);
            reloadButton.setClickable(true);
            reloadButton.setOnClickListener(v -> {
                // Reload original content view with SwipeRefreshLayout + WebView
                setContentView(swipeRefreshLayout);
                webView.reload();
            });

            // Add views to layout
            layout.addView(icon);
            layout.addView(title);
            layout.addView(subtitle);
            layout.addView(reloadButton);

            // Set layout as content view
            setContentView(layout);
        });
    }
}
